import GUI from "./gui";

import ace from "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/ext-language_tools";

export default class Editor {
  private _aceEditor = ace.edit("editor");
  private _gui: GUI;

  public constructor(gui: GUI) {
    this._gui = gui;
  }

  /**
   * Kernel getter.
   */
  public get kernel() {
    return this._gui.kernel;
  }
  public get kernelSafe() {
    return this._gui.kernelSafe;
  }

  /**
   * Initialize the Ace editor.
   */
  public async init() {
    // ace/mode/python3 does not exists...
    const language = this._gui.language;
    const ace_language = ["python3", "python3-old"].includes(language)
      ? "python"
      : language;
    this._aceEditor.session.setMode(`ace/mode/${ace_language}`);
    this._aceEditor.focus();

    this._aceEditor.setOptions({
      enableLiveAutocompletion: true,
      enableBasicAutocompletion: true,
      highlightActiveLine: false,
      highlightSelectedWord: true,
      fontSize: "12pt",
    });

    // editor's completion

    // removing all completers and keeping track of local completer
    const localCompleter = this._aceEditor.completers[1]; // any hint to detect this dynamically?
    this._aceEditor.completers = [
      {
        getCompletions: (editor, session, pos, prefix, callback) => {
          // get local completions (from editor, not namespace)
          let locals: any[] = [];
          localCompleter.getCompletions(
            editor,
            session,
            pos,
            prefix,
            function (_: any, completions: any[]) {
              locals = completions;
            }
          );
          // recover editor content up to position
          let lines = editor.getValue().split("\n");
          lines = lines.slice(0, pos.row + 1);
          lines[lines.length - 1] = lines[lines.length - 1].slice(
            0,
            pos.column
          );
          const src = lines.join("\n");
          // Basthon completion
          const kernelCompletions = this.kernelSafe?.complete(src);
          if (!kernelCompletions?.length) return;
          const start = kernelCompletions[1];
          let completions = kernelCompletions[0];
          // removing prefix
          const basthon_prefix = src.slice(start, -prefix.length);
          completions = completions.map((c: string) =>
            c.slice(basthon_prefix.length)
          );
          // union with local completions
          const completionsSet = new Set<string>(completions);
          for (let c of locals) {
            c = c.value;
            if (!(completionsSet.has(c) || completionsSet.has(c + "(")))
              completionsSet.add(c);
          }

          // rendering
          callback(
            null,
            [...completionsSet].map((value: string) => ({
              caption: value,
              value: value,
              meta: "code",
              score: 100,
            }))
          );
        },
      },
    ];
  }

  /**
   * Set editor's content (undo selection).
   */
  public setContent(content?: string) {
    if (content != null) this._aceEditor.setValue(content);
    this._aceEditor.scrollToRow(0);
    this._aceEditor.gotoLine(0, 0, false);
  }

  /**
   * Get editor's content
   */
  public getContent() {
    return this._aceEditor.getValue();
  }

  public resize() {
    return this._aceEditor.resize();
  }
  /**
   * Pass events to Ace editor.
   */
  public addEventListener(
    name: string,
    callback: Function,
    capturing?: boolean | undefined
  ) {
    return this._aceEditor.addEventListener(name, callback, capturing);
  }

  /**
   * Set ace theme.
   */
  public async setTheme(dark: boolean) {
    const theme = dark ? "monokai" : "xcode";
    this._aceEditor.setTheme(`ace/theme/${theme}`);
  }
}
