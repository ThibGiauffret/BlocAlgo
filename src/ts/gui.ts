// notie
import * as notie from "notie";
import "notie/dist/notie.css";
// jquery/jquery-ui
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import "jquery-ui-dist/jquery-ui.css";
// fontawesome
import "@fortawesome/fontawesome-free/css/all.css";
// open-sans
import "@fontsource/open-sans";
// basthon
import { GUIBase, GUIOptions } from "@basthon/gui-base";
// local
import Shell from "./shell";
import Editor from "./editor";
import Graphics from "./graphics";
import BlockEditor from "./blocks";
import "../css/style.css";

export default class GUI extends GUIBase {
  private _shell: Shell;
  private _editor: Editor;
  private _graphics: Graphics;
  private _blockEditor: BlockEditor;
  private _editorFlag = true;
  private _consoleFlag = true;

  public constructor(options: GUIOptions) {
    super(
      (() => {
        options.uiName = "console";
        return options;
      })()
    );
    this._urlKey = "script";
    this._contentFilename = "script";
    this._shell = new Shell(this);
    this._editor = new Editor(this);
    this._graphics = new Graphics(this);
    this._blockEditor = new BlockEditor();
    /* when kernel is available, set contentFilename extension */
    this.kernelLoader.kernelAvailable().then((kernel) => {
      const exts = kernel.moduleExts();
      if (exts.length) this._contentFilename += "." + exts[0];
      kernel.loaded().then(() => {
        this.hideLoader();
      });
    });
  }

  /**
   * Get editor's content.
   */
  public content(): string {
    return this._editor.getContent();
  }

  /**
   * Set editor's content.
   */
  public setContent(content: string): void {
    this._editor.setContent(content);
  }

  /**
   * Editor getter.
   */
  public get editor() {
    return this._editor;
  }

  /**
   * Shell getter.
   */
  public get shell() {
    return this._shell;
  }

  /**
   * Graphics getter.
   */
  public get graphics() {
    return this._graphics;
  }

  /**
   * Notify the user with an error.
   */
  public error(title: string, message: string) {
    notie.alert({
      type: "error",
      text: message,
      stay: false,
      time: 3,
      position: "bottom",
    });
  }

  /**
   * Notify the user.
   */
  public info(title: string, message: string) {
    notie.alert({
      type: "success",
      text: message,
      stay: false,
      time: 3,
      position: "bottom",
    });
  }

  /**
   * Ask the user to confirm or cancel.
   */
  public confirm(
    title: string,
    message: string,
    text: string,
    callback: () => void,
    textCancel: string,
    callbackCancel: () => void
  ): void {
    notie.confirm({
      text: message,
      submitText: text,
      cancelText: textCancel,
      position: "bottom",
      submitCallback: callback,
      cancelCallback: callbackCancel,
    });
  }

  /**
   * Ask the user to select a choice.
   */
  public select(
    title: string,
    message: string,
    choices: {
      text: string;
      handler: () => void;
    }[],
    textCancel: string,
    callbackCancel: () => void
  ) {
    let count = 0;
    notie.select({
      text: message,
      cancelText: textCancel,
      position: "bottom",
      choices: choices.map((c) => ({
        text: c.text,
        type: count++ % 2 ? "error" : "success",
        handler: c.handler || (() => {}),
      })),
      cancelCallback: callbackCancel || (() => {}),
    });
  }

  protected async setupUI(options: any) {
    await super.setupUI(options);

    await Promise.all([
      this._editor.init(),
      this._shell.init(),
      this._graphics.init(),
      this._blockEditor.init(),
    ]);

    await this.initTheme();
    let url = new URL(window.location.href);
    let from = url.searchParams.get("from");
    if (from) {
      await this.loadFromURL();
    } else {
      await this.load();
    }

    this._blockEditor._workspace.addChangeListener(() => {
      // trigger only on mouse up
      if (this._blockEditor._workspace.isDragging()) return;
      this.updateCode();
    });

    // listen when there is a change in #graphics or a div added to #graphics
    let graphicDiv = document.getElementById("graphics") as HTMLElement;

    let observer = new MutationObserver((mutations) => {
      let btn_graph_view = document.getElementById(
        "btn_graph_view"
      ) as HTMLElement;
      if (graphicDiv != null && graphicDiv.style.display == "none") {
        this._graphics.show();
        if (btn_graph_view != null)
          btn_graph_view.innerHTML = '<i class="fas fa-chart-line"></i>';
      }
    });

    observer.observe(graphicDiv, {
      // attributes: true,
      childList: true,
      subtree: true,
    });

    let button: HTMLElement | null;
    // get element by class name "theme-toogle"
    button = document.getElementsByClassName("theme-toggle")[0] as HTMLElement;
    button?.addEventListener("click", () => this.updateTheme());

    button = document.getElementsByClassName("add-file")[1] as HTMLElement;
    button?.addEventListener("click", () => this.showAddModal());

    button = document.getElementsByClassName("add-file")[0] as HTMLElement;
    button?.addEventListener("click", () => this.showAddModal());

    button = document.getElementsByClassName("download")[0] as HTMLElement;
    button?.addEventListener("click", () => this.downloadWorkspace());

    button = document.getElementsByClassName("import")[0] as HTMLElement;
    button?.addEventListener("click", () => this.showImportWorkspaceModal());

    button = document.getElementsByClassName("save")[0] as HTMLElement;
    button?.addEventListener("click", () => this.save());

    button = document.getElementsByClassName("save")[1] as HTMLElement;
    button?.addEventListener("click", () => this.save());

    button = document.getElementById("mobile") as HTMLElement;
    button?.addEventListener("click", () => this.showMenu());

    button = document.getElementById("import_cancel") as HTMLElement;
    button?.addEventListener("click", () => this.hideImportWorkspaceModal());

    button = document.getElementById("import_ok") as HTMLElement;
    button?.addEventListener("click", () => this.importWorkspace());

    button = document.getElementById("import_add_file_cancel") as HTMLElement;
    button?.addEventListener("click", () => this.hideAddModal());

    button = document.getElementById("import_add_file_ok") as HTMLElement;
    button?.addEventListener("click", () => this.importAddFile());

    button = document.getElementById("show_hide_toolbox") as HTMLElement;
    button?.addEventListener("click", () => this.hideToolbox());

    button = document.getElementById("undo") as HTMLElement;
    button?.addEventListener("click", () => this.undoBlock());

    button = document.getElementById("redo") as HTMLElement;
    button?.addEventListener("click", () => this.redoBlock());

    button = document.getElementById("reset") as HTMLElement;
    button?.addEventListener("click", () => this.resetBlock());

    button = document.getElementById("download_script") as HTMLElement;
    button?.addEventListener("click", () => this.downloadScript());

    /* connecting buttons */
    // run
    button = document.getElementById("run1") as HTMLElement;
    button?.addEventListener("click", () => this.runScript());
    button = document.getElementById("run2") as HTMLElement;
    button?.addEventListener("click", () => this.runScript());
    // open
    button = document.getElementById("open");
    button?.addEventListener("click", () => this.openFile());
    button?.addEventListener("click", () => this.share());
    // rolling back to previous version
    button = document.getElementById("rollback");
    button?.addEventListener("click", async () => {
      const content = await this.selectCheckpoint();
      if (content != null) this.setContent(content);
    });

    // raz
    button = document.getElementById("raz");
    button?.addEventListener("click", () => this.restart());
    // show shell
    button = document.getElementById("btn_shell");
    button?.addEventListener("click", () => this.showShell());
    // show graph
    button = document.getElementById("btn_graph_view");
    button?.addEventListener("click", () => this.showGraph());
    // view switch
    // button = document.getElementById("switch");
    // button?.addEventListener("click", () => this.switchView());
    // single/double vew
    button = document.getElementById("hide_console");
    button?.addEventListener("click", () => this.hideConsole());
    button = document.getElementById("hide_editor");
    button?.addEventListener("click", () => this.hideEditor());
    // button = document.getElementById("show-editor-console");
    // button?.addEventListener("click", () => this.showEditorConsole());

    /* binding ctrl+s */
    window.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        String.fromCharCode(event.which).toLowerCase() === "s"
      ) {
        event.preventDefault();
        this.save();
        this.downloadWorkspace();
      }
    });

    // Bind ctrl + z to undo
    window.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        String.fromCharCode(event.which).toLowerCase() === "z"
      ) {
        event.preventDefault();
        this.undoBlock();
      }
    });

    // Bind ctrl + y to redo
    window.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        String.fromCharCode(event.which).toLowerCase() === "y"
      ) {
        event.preventDefault();
        this.redoBlock();
      }
    });

    // Auto save every 2 minutes
    setInterval(() => {
      this.save();
    }, 120000);

    /* backup before closing */
    window.onbeforeunload = () => {
      this.backup().catch(this.notifyError.bind(this));
    };

    this.initTooltips();
  }

  public async showLoader() {
    document.getElementById("loader")!.style.display = "block";
  }

  public async hideLoader() {
    document.getElementById("loader")!.style.display = "none";
  }

  public async initTooltips() {
    ($(document) as any).tooltip({
      position: {
        my: "center top+5",
        at: "center bottom",
        using: function (position: any, feedback: any) {
          $(this).css(position);
          $(this).addClass(feedback.vertical);
        },
      },
    });
  }

  public async updateCode() {
    await this.loaded();
    const code = this._blockEditor.getCode();
    // remove all lines before the first line of code before line containing "# Début du programme"
    // const firstLine = code
    //   .split("\n")
    //   .findIndex((line) => line.includes("# Début du programme"));
    // const codeWithoutHeader = code.split("\n").slice(firstLine).join("\n");

    // this._editor.setContent(codeWithoutHeader);
    this._editor.setContent(code);
  }

  public async initTheme() {
    var themeToggleDarkIcon1 = document.getElementsByClassName(
      "theme-toggle-dark-icon"
    )[0];
    var themeToggleLightIcon1 = document.getElementsByClassName(
      "theme-toggle-light-icon"
    )[0];

    if (
      "color-theme" in localStorage &&
      localStorage.getItem("color-theme") === "dark"
    ) {
      themeToggleLightIcon1.classList.remove("hidden");
      document.documentElement.classList.add("dark");
      this._blockEditor.changeTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      await this._editor.setTheme(true);
    } else {
      themeToggleDarkIcon1.classList.remove("hidden");
      document.documentElement.classList.remove("dark");
      this._blockEditor.changeTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
      await this._editor.setTheme(false);
    }
  }

  public async updateTheme() {
    var themeToggleDarkIcon1 = document.getElementsByClassName(
      "theme-toggle-dark-icon"
    )[0];

    var themeToggleLightIcon1 = document.getElementsByClassName(
      "theme-toggle-light-icon"
    )[0];

    // toggle icons inside button
    themeToggleDarkIcon1.classList.toggle("hidden");

    themeToggleLightIcon1.classList.toggle("hidden");

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") == "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        this._blockEditor.changeTheme("dark");
        document.documentElement.setAttribute("data-theme", "dark");
        await this._editor.setTheme(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        this._blockEditor.changeTheme("light");
        document.documentElement.setAttribute("data-theme", "light");
        await this._editor.setTheme(false);
      }

      // if NOT set via local storage previously
    } else {
      if (!document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
        await this._editor.setTheme(true);
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
        await this._editor.setTheme(false);
      }
    }
  }

  public async downloadWorkspace() {
    let response = this._blockEditor.download();
    // download a json file with response
    var dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(response));
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "workspace.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  public async downloadScript() {
    let code = this._editor.getContent();
    // a py file with code, NO JSON THERE
    var dataStr = "data:text/python;charset=utf-8," + encodeURIComponent(code);
    var downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "script.py");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  public async showImportWorkspaceModal() {
    let modal = document.getElementById("import_modal")!;
    if (modal?.classList.contains("hidden")) {
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
    }
  }

  public async hideImportWorkspaceModal() {
    let modal = document.getElementById("import_modal")!;
    modal.classList.add("hidden");
  }

  public async importWorkspace() {
    let fileInput = document.getElementById("import_file") as HTMLInputElement;
    let file = fileInput.files![0];
    let reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = (evt) => {
      let result = evt.target?.result;
      if (result) {
        let json = JSON.parse(result as string);
        this._blockEditor.upload(json);
        this.updateCode();
        this.hideImportWorkspaceModal();
        notie.alert({
          type: "success",
          text: '<i class="fas fa-check"></i>&nbsp;Fichier de travail importé avec succès !',
          stay: false,
          time: 3,
          position: "bottom",
        });
      }
    };
    reader.onerror = (evt) => {
      notie.alert({
        type: "success",
        text: "Une erreur est survenue lors de la lecture du fichier importé.",
        stay: false,
        time: 3,
        position: "bottom",
      });
      this.hideImportWorkspaceModal();
    };
  }

  public async showAddModal() {
    let modal = document.getElementById("add_modal")!;
    if (modal?.classList.contains("hidden")) {
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
    }
  }

  public async hideAddModal() {
    let modal = document.getElementById("add_modal")!;
    modal.classList.add("hidden");
  }

  public async importAddFile() {

    let fileInput = document.getElementById("import_add_file") as HTMLInputElement;
    for (let file of fileInput.files!) {
      const ext = file.name.split('.').pop();
      if (ext !== null && ext !== void 0 ? ext : "" ) {
        await this.putFSRessource(file);
        notie.alert({
          type: "success",
          text: '<i class="fas fa-check"></i>&nbsp;Fichier ajouté avec succès !',
          stay: false,
          time: 3,
          position: "bottom",
        });
        this.hideAddModal();
      } else {
        notie.alert({
          type: "success",
          text: "Une erreur est survenue lors de l'ajout du fichier.",
          stay: false,
          time: 3,
          position: "bottom",
        });
        this.hideAddModal();

  }
}
       
        

  }

  public async save() {
    // save the _blockEditor content in local storage
    let response = this._blockEditor.download();
    localStorage.setItem("workspace", JSON.stringify(response));
    notie.alert({
      type: "success",
      text: '<i class="fas fa-check"></i>&nbsp;Contenu sauvegardé avec succès !',
      stay: false,
      time: 3,
      position: "bottom",
    });
  }

  public async load() {
    // load the _blockEditor content from local storage
    let workspace = localStorage.getItem("workspace");
    if (workspace && workspace !== "null") {
      let json = JSON.parse(workspace);
      this._blockEditor.upload(json);
      this.updateCode();
      notie.alert({
        type: "success",
        text: '<i class="fas fa-check"></i>&nbsp;Contenu chargé avec succès !',
        stay: false,
        time: 3,
        position: "bottom",
      });
    } else {
      this._blockEditor.addBase();
    }
  }

  public async loadFromURL() {
    //  get the from parameter in the url
    let url = new URL(window.location.href);
    let from = url.searchParams.get("from");
    if (from) {
      try {
        // get the content of the url
        let response = await fetch(from);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        let json = await response.json();
        // load the content in the _blockEditor
        this._blockEditor.upload(json);
        this.updateCode();
      } catch (error) {
        notie.alert({
          type: "error",
          text: "Une erreur est survenue lors du chargement du contenu distant.",
          stay: false,
          time: 3,
          position: "bottom",
        });
      }
    }
  }

  public async undoBlock() {
    this._blockEditor.undo();
  }

  public async redoBlock() {
    this._blockEditor.redo();
  }

  public async resetBlock() {
    this._blockEditor.reset();
  }
  /**
   * Run the editor script in the shell.
   */
  public async runScript() {
    await this.loaded();
    const src = this.content();
    this._shell.launch(src, false);
    this._shell.focus();
  }

  /**
   * RAZ function.
   */
  public restart() {
    this.kernelRestart();
    this._shell.clear();
    this._graphics.clean();
  }

  /**
   * Open *.py file by asking user what to do:
   * load in editor or put on (emulated) local filesystem.
   */
  public async openModuleFile(file: File) {
    this.confirm(
      "",
      `Que faire de ${file.name} ?`,
      "Charger dans l'éditeur",
      () => {
        this.open(file);
      },
      "Installer le module",
      () => {
        this.putFSRessource(file);
      }
    );
  }

  /**
   * Opening file: If it has kernel extension, loading it in the editor
   * or put on (emulated) local filesystem (user is asked to),
   * otherwise, loading it in the local filesystem.
   */
  public async openFile() {
    await this.kernelLoader.kernelAvailable();
    const callback = this.openModuleFile.bind(this);
    const callbacks: { [key: string]: (_: File) => Promise<void> } = {};
    this.kernelSafe?.moduleExts().forEach((ext: string) => {
      callbacks[ext] = callback;
    });
    return await this._openFile(callbacks);
  }

  public async showMenu() {
    var menu = document.getElementById("mobile-menu")!;
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }

  public async hideToolbox() {
    this._blockEditor.hideToolbox();
  }

  public hideConsole() {
    this._editor.resize();
    // get div with id output
    let editorCard = document.getElementById("editor_card")!;
    let outputCard = document.getElementById("output_card")!;
    let outputContainer = document.getElementById("output_container")!;
    // let editorContainer = document.getElementById("editor_container")!;
    // let editorContainer = document.getElementById("editor_container");

    let button = document.getElementById("hide_console")!;
    let outputTop = document.getElementById("output_top")!;

    outputContainer.classList.toggle("h-0");
    outputTop.classList.toggle("rounded-md");

    if (outputContainer.classList.contains("h-0")) {
      button.innerHTML = '<i class="fa-solid fa-eye"></i>';
      this._consoleFlag = false;
    } else {
      button.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
      this._consoleFlag = true;
    }

    if (!this._consoleFlag && !this._editorFlag) {
      outputCard.classList.remove("md:h-accordion");
      editorCard.classList.remove("md:h-accordion");
      outputCard.classList.remove("md:h-3/6");
      editorCard.classList.remove("md:h-3/6");
      editorCard.classList.remove("h-80");
    } else if (!this._consoleFlag) {
      editorCard.classList.add("md:h-accordion");
      editorCard.classList.add("h-80");
      outputCard.classList.remove("md:h-accordion");
      outputCard.classList.remove("md:h-3/6");
    } else if (!this._editorFlag) {
      outputCard.classList.add("md:h-accordion");
      editorCard.classList.remove("md:h-accordion");
      editorCard.classList.remove("md:h-3/6");
      editorCard.classList.remove("h-80");
    } else {
      outputCard.classList.remove("md:h-accordion");
      editorCard.classList.remove("md:h-accordion");
      outputCard.classList.add("md:h-3/6");
      editorCard.classList.add("md:h-3/6");
      editorCard.classList.add("h-80");
    }

    this._editor.resize();
  }

  /**
   * Displaying console alone.
   */
  public hideEditor() {
    this._editor.resize();
    // get div with id output
    let editorCard = document.getElementById("editor_card")!;
    let outputCard = document.getElementById("output_card")!;
    let editorContainer = document.getElementById("editor_container")!;
    // let outputContainer = document.getElementById("output_container")!;
    let button = document.getElementById("hide_editor")!;
    let editorTop = document.getElementById("editor_top")!;

    editorContainer.classList.toggle("h-0");
    editorCard.classList.toggle("md:h-3/6");
    editorTop.classList.toggle("rounded-md");

    if (editorContainer.classList.contains("h-0")) {
      button.innerHTML = '<i class="fa-solid fa-eye"></i>';
      this._editorFlag = false;
    } else {
      button.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
      this._editorFlag = true;
    }

    if (!this._consoleFlag && !this._editorFlag) {
      outputCard.classList.remove("md:h-accordion");
      editorCard.classList.remove("md:h-accordion");
      outputCard.classList.remove("md:h-3/6");
      editorCard.classList.remove("md:h-3/6");
      editorCard.classList.remove("h-80");
    } else if (!this._consoleFlag) {
      editorCard.classList.add("md:h-accordion");
      editorCard.classList.add("h-80");
      outputCard.classList.remove("md:h-accordion");
      outputCard.classList.remove("md:h-3/6");
    } else if (!this._editorFlag) {
      outputCard.classList.add("md:h-accordion");
      editorCard.classList.remove("md:h-accordion");
      editorCard.classList.remove("md:h-3/6");
      editorCard.classList.remove("h-80");
    } else {
      outputCard.classList.remove("md:h-accordion");
      editorCard.classList.remove("md:h-accordion");
      outputCard.classList.add("md:h-3/6");
      editorCard.classList.add("md:h-3/6");
      editorCard.classList.add("h-80");
    }

    this._editor.resize();
  }

  /**
   * Toggle hide/show shell/graph.
   */
  public showShell() {
    this._shell.show();
    this._graphics.hide();
  }

  /**
   * Toggle hide/show shell/graph.
   */
  public showGraph() {
    let graphicDiv = document.getElementById("graphics");
    let btn_graph_view = document.getElementById("btn_graph_view");
    // Test if graphics div is visible
    if (graphicDiv != null && graphicDiv.style.display != "none") {
      this._shell.show();
      this._graphics.hide();
      // Change html content of the button btn_graph_view

      if (btn_graph_view != null)
        btn_graph_view.innerHTML = '<i class="fas fa-chart-line"></i>';
    } else {
      this._shell.hide();
      this._graphics.show();
      if (btn_graph_view != null)
        btn_graph_view.innerHTML = '<i class="fas fa-terminal"></i>';
    }
  }
}
