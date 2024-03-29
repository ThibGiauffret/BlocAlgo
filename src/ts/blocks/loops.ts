import * as Blockly from "blockly";

export function setLoops() {
  // Boucles
  var boucle_for = {
    "message0": Blockly.Msg['boucle_for'],
    "args0": [
      {"type": "field_variable", "name": "VAR", "variable": "item", "variableTypes": [""]},
      {"type": "input_value", "name": "range_for", "check": null},
    ]
  };
  Blockly.Blocks["boucle_for"] = {
    init: function () {
      this.jsonInit(boucle_for);
      this.setInputsInline(true);
      this.appendStatementInput("content").setCheck("Boolean");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LOOPS_COLOR}");
      this.setTooltip(
        "Instruction de boucle 'pour' qui se répète entre la valeur de début et la valeur de fin avec un certain pas."
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/tutorial/controlflow.html#for-statements"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("range_for").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="range"></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  var boucle_for_in = {
    "message0": Blockly.Msg['boucle_for_in'],
    "args0": [
      {"type": "field_variable", "name": "VAR", "variable": "item", "variableTypes": [""]},
      {"type": "input_value", "name": "list", "check": null},
    ]
  };
  Blockly.Blocks["boucle_for_in"] = {
    init: function () {
      this.jsonInit(boucle_for_in);
      this.appendStatementInput("content").setCheck("Boolean");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LOOPS_COLOR}");
      this.setTooltip("Instruction de boucle 'pour'");
      this.setHelpUrl("");
    },
  };

  var boucle_while = {
    "message0": Blockly.Msg['boucle_while'],
    "args0": [
      {"type": "input_value", "name": "condition", "check": "Boolean"},
    ]
  };
  Blockly.Blocks["boucle_while"] = {
    init: function () {
      this.jsonInit(boucle_while);
      this.setInputsInline(true);
      this.appendStatementInput("content").setCheck("Boolean");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LOOPS_COLOR}");
      this.setTooltip("Instruction de boucle 'tant que'");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/tutorial/controlflow.html#while-statements"
      );
    },
  };
}
