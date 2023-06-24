import * as Blockly from "blockly";

export function setLists() {
  // Listes

  // Création d'une liste
  var list_create = {
    "message0": Blockly.Msg["list_create"],
    "args0": [
      { "type": "field_variable", "name": "list_name", "variable": "liste" },
      { "type": "input_value", "name": "list_values", "check": null },
    ],
  }
  Blockly.Blocks["list_create"] = {
    init: function () {
      this.jsonInit(list_create);
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
      
      var connection = this.getInput("list_values").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">[1,2,3,4,5]</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // Ajout d'un élément à une liste
  var list_add = {
    "message0": Blockly.Msg["list_add"],
    "args0": [
      { "type": "input_value", "name": "list_name", "check": null },
      { "type": "input_value", "name": "list_value", "check": null },
    ],
  }
  Blockly.Blocks["list_add"] = {
    init: function () {
      this.jsonInit(list_add);
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
  var list_get = {
    "message0": Blockly.Msg["list_get"],
    "args0": [
      { "type": "input_value", "name": "list_name", "check": null },
      { "type": "input_value", "name": "list_index", "check": "Number" },
    ],
  }
  Blockly.Blocks["list_get"] = {
    init: function () {
      this.jsonInit(list_get);
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
  var list_set = {
    "message0": Blockly.Msg["list_set"],
    "args0": [
      { "type": "input_value", "name": "list_name", "check": null },
      { "type": "input_value", "name": "list_index", "check": "Number" },
      { "type": "input_value", "name": "list_value", "check": null },
    ],
  }
  Blockly.Blocks["list_set"] = {
    init: function () {
      this.jsonInit(list_set);
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
