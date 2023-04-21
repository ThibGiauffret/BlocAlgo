import * as Blockly from "../../lib/blockly";

export function setGraph() {
  // matplotlib init
  Blockly.Blocks["matplotlib_plot"] = {
    init: function () {
      this.appendDummyInput().appendField("plt.plot (");
      this.appendValueInput("X").setCheck(null);
      this.appendDummyInput().appendField(" , ");
      this.appendValueInput("Y").setCheck(null);
      this.appendDummyInput()
        .appendField(' , label = "')
        .appendField(new Blockly.FieldTextInput("nom"), "LABEL")
        .appendField('" , color = "')
        .appendField(new Blockly.FieldTextInput("red"), "COLOR")
        .appendField('" marker = "')
        .appendField(new Blockly.FieldTextInput("o"), "MARKER")
        .appendField(' ")');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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

  Blockly.Blocks["matplotlib_plot2"] = {
    init: function () {
      this.appendDummyInput().appendField("plt.plot (");
      this.appendValueInput("X").setCheck(null);
      this.appendDummyInput().appendField(" , ");
      this.appendValueInput("Y").setCheck(null);
      this.appendDummyInput()
        .appendField(' , "')
        .appendField(new Blockly.FieldTextInput("ro"), "param")
        .appendField('")');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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
      this.appendDummyInput().appendField("plt.show()");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["matplotlib_title"] = {
    init: function () {
      this.appendDummyInput().appendField('plt.title ("');
      this.appendValueInput("TITLE").setCheck(null);
      this.appendDummyInput().appendField('")');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("TITLE").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">Titre</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  Blockly.Blocks["matplotlib_xlabel"] = {
    init: function () {
      this.appendDummyInput().appendField('plt.xlabel ("');
      this.appendValueInput("LABEL").setCheck(null);
      this.appendDummyInput().appendField('")');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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

  Blockly.Blocks["matplotlib_ylabel"] = {
    init: function () {
      this.appendDummyInput().appendField('plt.ylabel ("');
      this.appendValueInput("LABEL").setCheck(null);
      this.appendDummyInput().appendField('")');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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
      this.appendDummyInput().appendField("plt.grid ()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["matplotlib_legend"] = {
    init: function () {
      this.appendDummyInput().appendField("plt.legend()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_GRAPH_COLOR}");
      this.setTooltip("");
      this.setHelpUrl("");
    },
  };
}
