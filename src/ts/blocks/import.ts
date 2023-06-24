import * as Blockly from "blockly";

export function setImport() {
  // Importation
  Blockly.Blocks["import_numpy"] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg["import_numpy"]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque numpy");
      this.setHelpUrl("https://numpy.org/doc/stable/");
    },
  };

  Blockly.Blocks["import_turtle"] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg["import_turtle"]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque turtle");
      this.setHelpUrl("https://docs.python.org/fr/3/library/turtle.html");
    },
  };

  Blockly.Blocks["import_random"] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg["import_random"]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque random");
      this.setHelpUrl("https://docs.python.org/fr/3/library/random.html");
    },
  };

  Blockly.Blocks["import_math"] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg["import_math"]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque math");
      this.setHelpUrl("https://docs.python.org/fr/3/library/math.html");
    },
  };

  Blockly.Blocks["import_time"] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg["import_time"]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque time");
      this.setHelpUrl("https://docs.python.org/fr/3/library/time.html");
    },
  };

  Blockly.Blocks["import_matplotlib"] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg["import_matplotlib"]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque matplotlib");
      this.setHelpUrl("https://matplotlib.org/");
    },
  };

  Blockly.Blocks["import_pil"] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg["import_pil"]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque PIL.Image");
      this.setHelpUrl("https://pillow.readthedocs.io/en/stable/");
    },
  };
}
