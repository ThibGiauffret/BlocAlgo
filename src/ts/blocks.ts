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

export default class BlockEditor {
  private _blockDiv = document.getElementById("blocklyDiv")!;
  private _toolbox: any;
  public _workspace!: Blockly.WorkspaceSvg;
  private _injectionDiv: any;
  private _code: string = "";
  private _customDark: any;
  private _style: any;
  private _toolboxFlag = true;

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

    // window.addEventListener("resize", this.onresize, false);
    // this.onresize();
    this.setBlocksColor();
    this.toolboxStyle();
    this.initTooltips();
    this.setBlocks();
    this.setGenerators();

    this._injectionDiv = this._workspace.getInjectionDiv();
    // add class to the injection div
    this._injectionDiv.classList.add("rounded-b-md");
  }

  public addBase() {
    var newBlock = this._workspace.newBlock("factory_base");
    // center workspace on new block and put on top

    newBlock.initSvg();
    newBlock.render();

    this._workspace.centerOnBlock(newBlock.id);

    newBlock.moveBy(0, -100);
  }

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

  public changeTheme(theme: string) {
    if (theme === "light") {
      this._style = Blockly.Themes.Classic;
    } else if (theme === "dark") {
      this._style = this._customDark;
    }

    this._workspace.setTheme(this._style);
  }

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
    ];
    // let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

        // change height of category
        // category[i].rowDiv_.style.height = "30px";
        // change padding of category
        // category[i].rowDiv_.style.padding = "0px 0px 0px 10px";
        // add style to the category
        // change color of text

        // category[i].rowDiv_.getElementsByClassName(
        //   "blocklyTreeLabel"
        // )[0].style.color = "white";
        // category[i].rowDiv_
        //   .getElementsByClassName("blocklyTreeLabel")[0]
        //   .classList.add(
        //     // float left
        //     "float-left"
        //   );

        // //remove style
        // category[i].rowDiv_
        //   .getElementsByClassName("blocklyTreeLabel")[0]
        //   .removeAttribute("style");
        //set class mt-1 md:space-x-1 space-y-1 md:space-y-0 mb-4
      }
    }

    // category.hide();
  }

  public getCode() {
    this._code = "";

    // put the function_def blocks at the top of the code
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

    // console.log(allBlocks);

    // generate code from allBlocks with blockToCode
    otherBlocks.map((block) => {
      // get code from block function_def even if it is orphan
      const code = pythonGenerator.blockToCode(block);
      // add to this._code
      this._code += code;
    });

    return this._code;

    // this._code = pythonGenerator.workspaceToCode(this._workspace);
    // return this._code;
  }

  public download() {
    // const serializer = new Blockly.serialization.blocks.BlockSerializer();
    // const state = serializer.save(this._workspace);
    // return state;
    var xml = Blockly.Xml.workspaceToDom(this._workspace);
    var xml_text = Blockly.Xml.domToText(xml);
    return xml_text;
  }

  public upload(state: any) {
    this._workspace.clear();
    // const serializer = new Blockly.serialization.blocks.BlockSerializer();
    // serializer.load(state, this._workspace);
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

  public async undo() {
    this._workspace.undo(false);
  }

  public async redo() {
    this._workspace.undo(true);
  }

  public async reset() {
    this._workspace.clear();
    this.addBase();
  }

  public async initTooltips() {
    // Create a custom rendering function. This function will be called whenever
    // a tooltip is shown in Blockly. The first argument is the div to render
    // the content into. The second argument is the element to show the tooltip
    // for.
    const customTooltip = function (div: any, element: any) {
      if (element instanceof Blockly.BlockSvg) {
        // You can access the block being moused over.
        // Here we get the color of the block to set the background color.
        // add class ui-tooltip
        div.classList.add("ui-tooltip");
      }
      const tip = Blockly.Tooltip.getTooltipOfObject(element);
      const text = document.createElement("div");
      // change text color
      text.style.color = "white";
      text.style.fontSize = "14px";
      text.style.padding = "2px";
      text.textContent = tip;
      const container = document.createElement("div");
      container.style.display = "flex";
      container.appendChild(text);
      div.appendChild(container);
    };
    // Register the function in the Blockly.Tooltip so that Blockly calls it
    // when needed.
    Blockly.Tooltip.setCustomTooltip(customTooltip);
  }

  public setBlocks() {
    // Base
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

    // Importation
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
  }

  public setGenerators() {
    // Base
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
  }

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

    // console.log(Blockly.Msg);
    // block.setColour('%{BKY_EVERYTHING_HUE}');
  }
}
