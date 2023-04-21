import $ from "jquery";
import "jquery.terminal";
import "jquery.terminal/css/jquery.terminal.css";
import GUI from "./gui";


export default class Shell {
    private _elem = document.getElementById("shell");
    private _gui: GUI;
    private _term: any;
    // A buffer to handle multiline shell input.
    private _buffer: string[] = [];
    // tell wether we are waiting for user input during
    // program execution (Python's input())
    private _inputMode: boolean = false;
    // promise resolver for input mode
    private _inputResolve?: ((_?: string) => void);

    public constructor(gui: GUI) { this._gui = gui; }

    /**
     * Kernel getter.
     */
    public get kernel() { return this._gui.kernel; }
    public get kernelSafe() { return this._gui.kernelSafe; }

    /**
     * Getter for DOM element.
     */
    public get domElement() { return this._elem; }

    /**
     * Mimic CPython's REPL banner.
     */
    public banner() {
        let banner = this.kernel?.banner();
        // Python 3.8
        banner = banner?.replace("on WebAssembly VM", "");
        // Python 3.10
        banner = banner?.replace("on WebAssembly/Emscripten", "");
        return banner;
    }

    /**
     * Reset the multiline input buffer.
     */
    public reset_buffer() {
        this._buffer = [];
    }

    private _interpreter(command: string) {
        // user answers to its program's input
        if (this._inputMode) {
            this._term.set_prompt("");
            this._inputMode = false;
            this.pause();
            this._inputResolve?.(command);
            return;
        }
        // user interacts with REPL
        this._buffer.push(command);
        const source = this._buffer.join('\n');
        if (this.kernelSafe?.more(source)) {
            this._term.set_prompt(this.kernel?.ps2());
        } else {
            this._term.set_prompt(this.kernel?.ps1());
            this.reset_buffer();
            this.launch(source, true);
        }
    }

    /**
     * Initialize the shell.
     */
    public async init() {
        // just to be safe
        this.reset_buffer();

        await this._gui.kernelLoader.kernelAvailable();
        this._term = $('#shell').terminal(
            this._interpreter.bind(this),
            {
                greetings: this.banner(),
                prompt: this.kernel?.ps1(),
                completionEscape: false,
                completion: (command: string, callback: ((_: any) => void)) => {
                    const completions = this.kernelSafe?.complete(command) ?? [[]];
                    if (completions.length) callback(completions[0])
                }
            });
        // this prevents JQuery Terminal to redraw terminal and remove
        // script wrapping feature
        this._term.resize = () => { };

        /* Event connections */
        this._gui.kernelLoader.kernelLoaded().then(() => {
            this.kernel?.addEventListener("eval.finished", (data) => {
                if (data.interactive && "result" in data) {
                    this.echo(data.result["text/plain"] + '\n');
                }
                this._term.set_prompt(this.kernel?.ps1())
                this.wakeup();
            });

            this.kernel?.addEventListener("eval.output", (data) => {
                switch (data.stream) {
                    case "stdout":
                        this.echo(data.content);
                        break;
                    case "stderr":
                        this.error(data.content);
                        break;
                }
            });

            this.kernel?.addEventListener("eval.error", (data) =>  {
                this._term.set_prompt(this.kernel?.ps1());
                this.wakeup();
            });

            this.kernel?.addEventListener("eval.input", (data) => {
                this._inputMode = true;
                const prompt = data?.content?.prompt;
                if (prompt != null) this.echo(prompt);
                this._inputResolve = data.resolve;
                this.wakeup();
                this.focus();
            });
        });
    }

    /**
     * Force waiting for input to end.
     */
    private async _stopWaitInput() {
        if (!this._inputMode) return;
        this._inputResolve?.();
        this._inputMode = false;
    }

    /**
     * Print a string in the shell.
     */
    public echo(message: string) {
        // JQuery.terminal adds a trailing newline that is not easy
        // to remove with the current API. Doing our best here.

        message = message.toString();

        // prompt can be polluted with previous echo
        // _prompt_tail is the line part just before the prompt
        const term = this._term;
        term._prompt_tail = term._prompt_tail ?? '';
        let prompt = term.get_prompt();
        if (prompt.startsWith(term._prompt_tail))
            prompt = prompt.slice(term._prompt_tail.length);
        else
            term._prompt_tail = '';
        // here, prompt and _prompt_tail should be correctly isolated
        const lines = message.split('\n');
        lines[0] = term._prompt_tail + lines[0];
        term._prompt_tail = lines.pop();
        term.set_prompt(term._prompt_tail + prompt);
        if (lines.length) {
            // term.echo("") does not display blank line
            // so we replace this call with term.echo('\b')
            term.echo(lines.join('\n') || '\b');
        }
    }

    /**
     * Print error in shell (in red).
     */
    public error(message: string) {
        // JQuery.terminal adds a trailing newline that is not easy
        // to remove with the current API. Doing our best here.
        message = message.toString();
        return this._term.error(message.replace(/\n+$/, ""));
    }

    /**
     * Pause the shell execution (usefull to wait for event or promise).
     */
    public pause() { this._term.pause(); }

    /**
     * Resume the shell execution (see `pause`).
     */
    public wakeup() { this._term.resume(); }

    /**
     * Recover the shell as it was at start.
     */
    public clear() {
        this._term.clear();
        this.echo(this.banner() + "\n");
        this.reset_buffer();
        this._stopWaitInput();
    }

    /**
     * Show script in shell with content as dropdown
     * (should improve readability).
     */
    public showScript(code: string) {
        code = `# script executed\n${code}`;
        let script = `${this.kernel?.ps1()}`;
        script += code.split('\n').join(`\n${this.kernel?.ps2()}`);
        script += '\n';
        this.echo(script);
        const output = this._elem?.querySelector(".terminal-output")?.lastElementChild;
        const header = output?.firstElementChild;
        if (header == null) return;
        header.classList.add("exec-script-header");
        for (const e of header.children)
            (e as HTMLElement).style.backgroundColor = "inherit";
        function hideShow() {
            const converter: { [key: string]: string; } =
                { "none": "block", "": "none", "block": "none" };
            if (output == null) return;
            for (const e of output.children) {
                if (e === header) continue;
                const style = (e as HTMLElement).style;
                style.display = converter[style.display];
            }
        }
        header.addEventListener("click", hideShow);
        hideShow();
    }

    /**
     * Launch code in shell.
     */
    public launch(code: string, interactive: boolean = true) {
        if (this.kernelSafe == null) return;
        this._stopWaitInput();
        if (!interactive) this.showScript(code);
        this.pause();
        this._term.set_prompt("");
        this.kernelSafe.dispatchEvent("eval.request", {
            code: code,
            interactive: interactive
        });
    }

    /**
     * Give focus to terminal.
     */
    public focus() { this._term.focus(); }

    /**
     * Hide shell view.
     */
    public hide() {
        if (this._elem != null)
            this._elem.style.display = "none";
    }

    /**
     * Show shell view.
     */
    public show() {
        if (this._elem != null)
            this._elem.style.display = "block";
    }
}
