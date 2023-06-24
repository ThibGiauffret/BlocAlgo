import * as Blockly from "blockly";

export function setGraph() {
  // matplotlib init
  var matplotlib_plot = {
    "message0": Blockly.Msg['matplotlib_plot'],
    "args0": [
      {"type": "input_value", "name": "X", "check": null},
      {"type": "input_value", "name": "Y", "check": null},
      {"type": "field_input", "name": "LABEL", "text" : "nom", "check": "String"},
      {"type": "field_input", "name": "COLOR", "text" : "red", "check": "String"},
      {"type": "field_input", "name": "MARKER", "text" : "o", "check": "String"},
    ]
  };
  Blockly.Blocks["matplotlib_plot"] = {
    init: function () {
      this.jsonInit(matplotlib_plot);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("X").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">X</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      connection = this.getInput("Y").connection;
      otherConnection = connection.targetConnection;
      dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">Y</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  var matplotlib_plot2 = {
    "message0": Blockly.Msg['matplotlib_plot2'],
    "args0": [
      {"type": "input_value", "name": "X", "check": null},
      {"type": "input_value", "name": "Y", "check": null},
      {"type": "field_input", "name": "param", "text" : "ro", "check": "String"},
    ]
  };
  Blockly.Blocks["matplotlib_plot2"] = {
    init: function () {
      this.jsonInit(matplotlib_plot2);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("X").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">X</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      connection = this.getInput("Y").connection;
      otherConnection = connection.targetConnection;
      dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">Y</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  Blockly.Blocks["matplotlib_show"] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg["matplotlib_show"]);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
    },
  };

  var matplotlib_title = {
    "message0": Blockly.Msg['matplotlib_title'],
    "args0": [
      {"type": "input_value", "name": "TITLE", "check": null},
    ]
  };
  Blockly.Blocks["matplotlib_title"] = {
    init: function () {
      this.jsonInit(matplotlib_title);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("TITLE").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">Titre du graphique</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  var matplotlib_xlabel = {
    "message0": Blockly.Msg['matplotlib_xlabel'],
    "args0": [
      {"type": "input_value", "name": "LABEL", "check": null},
    ]
  };
  Blockly.Blocks["matplotlib_xlabel"] = {
    init: function () {
      this.jsonInit(matplotlib_xlabel);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("LABEL").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">Label</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  var matplotlib_ylabel = {
    "message0": Blockly.Msg['matplotlib_ylabel'],
    "args0": [
      {"type": "input_value", "name": "LABEL", "check": null},
    ]
  };
  Blockly.Blocks["matplotlib_ylabel"] = {
    init: function () {
      this.jsonInit(matplotlib_ylabel);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("LABEL").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">Label</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  Blockly.Blocks["matplotlib_grid"] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg["matplotlib_grid"]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["matplotlib_legend"] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg["matplotlib_legend"]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
    },
  };
}
