import * as Blockly from "../../lib/blockly";

export function setLists() {
  // Listes

  // Création d'une liste
  Blockly.Blocks["list_create"] = {
    init: function () {
      // add var
      this.appendDummyInput().appendField(
        new Blockly.FieldVariable("liste"),
        "list_name"
      );
      this.appendDummyInput().appendField(" = [");
      this.appendValueInput("list_values").setCheck(null);
      this.appendDummyInput().appendField("]");
      // inline
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LISTS_COLOR}");
      this.setTooltip("Création d'une liste");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/tutorial/datastructures.html#more-on-lists"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("list_values").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">1,2,3,4,5</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // Ajout d'un élément à une liste
  Blockly.Blocks["list_add"] = {
    init: function () {
      this.appendValueInput("list_name").setCheck(null);
      this.appendDummyInput().appendField(".append (");
      this.appendValueInput("list_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LISTS_COLOR}");
      this.setTooltip("Ajout d'un élément à une liste");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/tutorial/datastructures.html#more-on-lists"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("list_value").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">1</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // Accès à un élément d'une liste
  Blockly.Blocks["list_get"] = {
    init: function () {
      this.appendValueInput("list_name").setCheck(null);
      this.appendDummyInput().appendField("[");
      this.appendValueInput("list_index").setCheck("Number");
      this.appendDummyInput().appendField("]");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_LISTS_COLOR}");
      this.setTooltip("Accès à un élément d'une liste");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/tutorial/datastructures.html#more-on-lists"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("list_index").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">0</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // Modification d'un élément d'une liste
  Blockly.Blocks["list_set"] = {
    init: function () {
      this.appendValueInput("list_name").setCheck(null);
      this.appendDummyInput().appendField("[");
      this.appendValueInput("list_index").setCheck("Number");
      this.appendDummyInput().appendField("]");
      this.appendDummyInput().appendField(" = ");
      this.appendValueInput("list_value").setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LISTS_COLOR}");
      this.setTooltip("Modification d'un élément d'une liste");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/tutorial/datastructures.html#more-on-lists"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("list_index").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">0</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      var connection = this.getInput("list_value").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">1</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };
}
