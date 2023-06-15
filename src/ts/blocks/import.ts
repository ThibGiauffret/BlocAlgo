import * as Blockly from "../../lib/blockly";

export function setImport() {
  // Importation
  Blockly.Blocks["import_numpy"] = {
    init: function () {
      this.appendDummyInput().appendField("import numpy as np");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque numpy");
      this.setHelpUrl("https://numpy.org/doc/stable/");
    },
  };

  Blockly.Blocks["import_turtle"] = {
    init: function () {
      this.appendDummyInput().appendField("from turtle import *");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque turtle");
      this.setHelpUrl("https://docs.python.org/fr/3/library/turtle.html");
    },
  };

  Blockly.Blocks["import_random"] = {
    init: function () {
      this.appendDummyInput().appendField("import random");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque random");
      this.setHelpUrl("https://docs.python.org/fr/3/library/random.html");
    },
  };

  Blockly.Blocks["import_math"] = {
    init: function () {
      this.appendDummyInput().appendField("import math");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque math");
      this.setHelpUrl("https://docs.python.org/fr/3/library/math.html");
    },
  };

  Blockly.Blocks["import_time"] = {
    init: function () {
      this.appendDummyInput().appendField("import time");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque time");
      this.setHelpUrl("https://docs.python.org/fr/3/library/time.html");
    },
  };

  Blockly.Blocks["import_matplotlib"] = {
    init: function () {
      this.appendDummyInput().appendField("import matplotlib.pyplot as plt");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque matplotlib");
      this.setHelpUrl("https://matplotlib.org/");
    },
  };

  Blockly.Blocks["import_pil"] = {
    init: function () {
      this.appendDummyInput().appendField("from PIL import Image");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_IMPORT_COLOR}");
      this.setTooltip("Importation de la bibliothèque PIL.Image");
      this.setHelpUrl("https://pillow.readthedocs.io/en/stable/");
    },
  };
}
