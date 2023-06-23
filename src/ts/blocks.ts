/**
 * The blocks.ts file defines custom Blockly blocks and code generators used 
 * in the workspace. It imports the necessary modules and functions, and exports 
 * a BlockEditor class. The file also defines the toolbox used in the 
 * workspace, which contains the custom blocks organized by category.
 */

import * as Blockly from "../lib/blockly";
// import * as Fr from "blockly/msg/fr";
import * as Custom from "./fr";
import { pythonGenerator } from "../lib/blockly/python";
import { toolbox } from "./blocks/toolbox";

import { setImport } from "./blocks/import";
import { setStatements } from "./blocks/statements";
import { setLogic } from "./blocks/logic";
import { setLoops } from "./blocks/loops";
import { setMath } from "./blocks/math";
import { setFunctions } from "./blocks/functions";
import { setLists } from "./blocks/lists";
import { setTurtle } from "./blocks/turtle";
import { setGraph } from "./blocks/graph";
import { setRandom } from "./blocks/random";
import {setPIL} from "./blocks/pil";

import { setImportGen } from "./generators/import";
import { setStatementsGen } from "./generators/statements";
import { setLogicGen } from "./generators/logic";
import { setLoopsGen } from "./generators/loops";
import { setMathGen } from "./generators/math";
import { setFunctionsGen } from "./generators/functions";
import { setListsGen } from "./generators/lists";
import { setVariablesGen } from "./generators/variables";
import { setTurtleGen } from "./generators/turtle";
import { setGraphGen } from "./generators/graph";
import { setRandomGen } from "./generators/random";
import { setPILGen } from "./generators/pil";

export default class BlockEditor {
  private _blockDiv = document.getElementById("blocklyDiv")!;
  private _toolbox: any;
  public _workspace!: Blockly.WorkspaceSvg;
  private _injectionDiv: any;
  private _code: string = "";
  private _customDark: any;
  private _style: any;
  private _toolboxFlag = true;

  /**
   * Initializes the Blockly workspace.
   * @async
   * @returns {Promise<void>} A Promise that resolves when the workspace is initialized.
   */
  public async init() {
    this.setDarkTheme();
    this.patchRightBump();
    Blockly.setLocale(Custom);
    let options = {
      toolbox: toolbox,
      collapse: true,
      comments: true,
      disable: true,
      maxBlocks: Infinity,
      trashcan: true,
      horizontalLayout: false,
      toolboxPosition: "start",
      css: true,
      media: "https://blockly-demo.appspot.com/static/media/",
      rtl: false,
      scrollbars: true,
      sounds: true,
      oneBasedIndex: true,
      grid: {
        spacing: 20,
        length: 1,
        colour: "#888",
        snap: false,
      },
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
      },
      renderer: "zelos",
      theme: this._style,
    };

    this._workspace = Blockly.inject(this._blockDiv, options);
    this._workspace.addChangeListener(Blockly.Events.disableOrphans);
    this._toolbox = this._workspace.getToolbox();

    pythonGenerator.init(this._workspace);

    this.setBlocksColor();
    this.toolboxStyle();
    this.initTooltips();
    this.setBlocks();
    this.setGenerators();

    this._injectionDiv = this._workspace.getInjectionDiv();
    this._injectionDiv.classList.add("rounded-b-md");
  }

  /**
   * Adds a new base block to the Blockly workspace.
   * @returns {void}
   */
  public addBase() {
    var newBlock = this._workspace.newBlock("factory_base");
    newBlock.initSvg();
    newBlock.render();
    this._workspace.centerOnBlock(newBlock.id);
    newBlock.moveBy(0, -100);
  }

  /**
   * Patches the right bump of the Blockly blocks.
   * @returns {void}
   */
  public patchRightBump() {
    // const origMakeSpacerRow_ =
    //   Blockly.blockRendering.RenderInfo.prototype.makeSpacerRow_;
    // Blockly.blockRendering.RenderInfo.prototype.makeSpacerRow_ = function () {
    //   const spacer = origMakeSpacerRow_.apply(this, [
    //     this.topRow,
    //     this.bottomRow,

    //   ]);
    //   if (
    //     spacer.followsStatement &&
    //     this.bottomRow.minHeight >= this.constants_.FIELD_BORDER_RECT_HEIGHT
    //   ) {
    //     spacer.height += this.constants_.NOTCH_HEIGHT;
    //   }
    //   return spacer;
    // };

    Blockly.zelos.RenderInfo.prototype.adjustXPosition_ = function () {
      // do nothing
    };
  }

  /**
   * Sets the Blockly workspace to use a custom dark theme.
   * @returns {void}
   */
  public setDarkTheme() {
    this._customDark = Blockly.Theme.defineTheme("customdark", {
      name: "customdark",
      base: Blockly.Themes.Classic,
      componentStyles: {
        workspaceBackgroundColour: "#18181b",
        toolboxBackgroundColour: "#27272a",
        toolboxForegroundColour: "#f",
        flyoutBackgroundColour: "#252526",
        flyoutForegroundColour: "#ccc",
        flyoutOpacity: 0.5,
        scrollbarColour: "#333",
        scrollbarOpacity: 0.5,
        insertionMarkerColour: "#333",
        insertionMarkerOpacity: 1,
        markerColour: "#333",
        cursorColour: "#333",
        selectedGlowColour: "#333",
        selectedGlowOpacity: 1,
        replacementGlowColour: "#333",
        replacementGlowOpacity: 1,
      },
    });
  }

  /**
   * Changes the Blockly workspace theme to the specified theme.
   * @param {string} theme - The name of the theme to change to ("light" or "dark").
   * @returns {void}
   */
  public changeTheme(theme: string) {
    if (theme === "light") {
      this._style = Blockly.Themes.Classic;
    } else if (theme === "dark") {
      this._style = this._customDark;
    }
    this._workspace.setTheme(this._style);
  }

  /**
   * Changes the Blockly workspace theme to the specified theme.
   * @returns {void}
   */
  public toolboxStyle() {
    let titres = [
      "Bibliothèques",
      "Variables",
      "Listes",
      "Instructions",
      "Logique",
      "Boucles",
      "Fonctions",
      "Maths",
      "Tortue",
      "Graphique",
      "Aléatoire",
      "Images",
    ];
    let icons = [
      '<i class="fa-solid fa-file-arrow-down"></i>',
      '<i class="fa-solid fa-plus"></i>',
      '<i class="fa-solid fa-list"></i>',
      '<i class="fa-solid fa-circle-exclamation"></i>',
      '<i class="fa-solid fa-check"></i>',
      '<i class="fa-solid fa-repeat"></i>',
      '<i class="fa-solid fa-box"></i>',
      '<i class="fa-solid fa-square-root-variable"></i>',
      '<i class="fa-solid fa-pen"></i>',
      '<i class="fa-solid fa-chart-pie"></i>',
      '<i class="fa-solid fa-dice"></i>',
      '<i class="fa-solid fa-image"></i>',
    ];
    var category = this._toolbox.getToolboxItems();
    for (var i = 0; i < category.length; i++) {
      if (category[i].rowDiv_ != undefined) {
        category[i].rowDiv_.getElementsByClassName(
          "blocklyTreeLabel"
        )[0].innerHTML =
          '<span class="inline-flex items-center justify-center h-5 w-6 rounded-full text-zinc-700 dark:text-white">' +
          icons[i] +
          '</span><span class="ml-2  text-zinc-700 dark:text-white' +
          '">' +
          titres[i] +
          "</span>";
      }
    }
  }

  /**
   * Generates code from the Blockly workspace.
   * @returns {void}
   */
  public getCode() {
    this._code = "";
    const functionDefBlocks = this._workspace
      .getTopBlocks(true)
      .filter((block) => block.type === "function_def");
    functionDefBlocks.map((block) => {
      // get code from block function_def even if it is orphan
      const code = pythonGenerator.blockToCode(block);
      // add to this._code
      this._code += code;
    });
    const otherBlocks = this._workspace
      .getTopBlocks(true)
      .filter((block) => block.type !== "function_def");
    // generate code from allBlocks with blockToCode
    otherBlocks.map((block) => {
      // get code from block function_def even if it is orphan
      const code = pythonGenerator.blockToCode(block);
      // add to this._code
      this._code += code;
    });
    return this._code;
  }


  /**
   * Downloads the Blockly workspace as an XML string.
   * @returns {string} The XML string representing the current state of the workspace.
   */
  public download() {
    var xml = Blockly.Xml.workspaceToDom(this._workspace);
    var xml_text = Blockly.Xml.domToText(xml);
    return xml_text;
  }

  /**
   * Uploads the Blockly workspace state from an XML string.
   * @param {any} state - The XML string representing the state of the workspace to upload.
   * @returns {void}
   */
  public upload(state: any) {
    this._workspace.clear();
    var xml = Blockly.Xml.textToDom(state);
    Blockly.Xml.domToWorkspace(xml, this._workspace);
    // set workspace center to the top block location
    const topBlocks = this._workspace.getTopBlocks(true);
    if (topBlocks.length > 0) {
      const topBlock = topBlocks[0];
      const topBlockXY = topBlock.getRelativeToSurfaceXY();
      this._workspace.scrollX = -topBlockXY.x;
      this._workspace.scrollY = -topBlockXY.y;
    }
    this._workspace.getTopBlocks(true)[0].moveBy(50, 50);
  }

  /**
   * Toggles the visibility of the Blockly toolbox.
   * @returns {void}
   */
  public async hideToolbox() {
    if (this._toolboxFlag === false) {
      this._toolboxFlag = true;
      this._workspace.getToolbox()!.setVisible(true);
    } else {
      this._toolboxFlag = false;
      this._workspace.getToolbox()!.setVisible(false);
      this._workspace.hideChaff();
    }
  }

  /**
   * Undoes the last action in the Blockly workspace.
   * @returns {void}
   */
  public async undo() {
    this._workspace.undo(false);
  }

  /**
   * Redoes the last undone action in the Blockly workspace.
   * @returns {void}
   */
  public async redo() {
    this._workspace.undo(true);
  }

  /**
   * Resets the Blockly workspace to its initial state.
   * @returns {void}
   */
  public async reset() {
    this._workspace.clear();
    this.addBase();
  }

  /**
   * Initializes custom tooltips for Blockly blocks.
   * @returns {void}
   */
  public async initTooltips() {
    const customTooltip = function (div: any, element: any) {
      if (element instanceof Blockly.BlockSvg) {
        div.classList.add("ui-tooltip");
      }
      const tip = Blockly.Tooltip.getTooltipOfObject(element);
      const text = document.createElement("div");
      text.style.color = "white";
      text.style.fontSize = "14px";
      text.style.padding = "2px";
      text.textContent = tip;
      const container = document.createElement("div");
      container.style.display = "flex";
      container.appendChild(text);
      div.appendChild(container);
    };
    Blockly.Tooltip.setCustomTooltip(customTooltip);
  }

  /**
   * Defines the custom Blockly blocks used in the workspace.
   * @returns {void}
   */
  public setBlocks() {
    Blockly.Blocks["factory_base"] = {
      init: function () {
        this.setDeletable(true);
        this.setMovable(false);
        this.setEditable(false);
        this.appendDummyInput().appendField("# Début du programme");
        this.setPreviousStatement(false, null);
        this.setNextStatement(true, null);
        this.setColour("#F97316");
      },
    };
    setImport();
    setStatements();
    setLogic();
    setLoops();
    setMath();
    setFunctions();
    setLists();
    setTurtle();
    setGraph();
    setRandom();
    setPIL()
  }

  /**
   * Defines the custom code generators used in the workspace.
   * @returns {void}
   */
  public setGenerators() {
    pythonGenerator["factory_base"] = function (block: any) {
      var code = "# Début du programme\r\n";
      return code;
    };
    setImportGen();
    setStatementsGen();
    setLogicGen();
    setLoopsGen();
    setMathGen();
    setFunctionsGen();
    setListsGen();
    setVariablesGen();
    setTurtleGen();
    setGraphGen();
    setRandomGen();
    setPILGen()
  }

  /**
   * Defines the custom colors used for Blockly blocks.
   * @returns {void}
   */
  public setBlocksColor() {
    Blockly.Msg.IMPORT_COLOR = "#42af55";
    Blockly.Msg.STATEMENTS_COLOR = "#388dc8";
    Blockly.Msg.VARIABLES_COLOR = "#a55b80";
    Blockly.Msg.LOGIC_COLOR = "#f57070";
    Blockly.Msg.LOOPS_COLOR = "#40ADB3";
    Blockly.Msg.FUNCTIONS_COLOR = "#e3ac5f";
    Blockly.Msg.LISTS_COLOR = "#BFB039";
    Blockly.Msg.MATH_COLOR = "#9741c3";
    Blockly.Msg.TURTLE_COLOR = "#37B375";
    Blockly.Msg.GRAPH_COLOR = "#457389";
    Blockly.Msg.RANDOM_COLOR = "#f5a623";
    Blockly.Msg.PIL_COLOR = "#81A0EB";
  }
}
