import * as Blockly from "blockly";

export function setFunctions() {
  // Function definition
  var function_def = {
    "message0": Blockly.Msg['function_def'],
    "args0": [
      {"type": "input_value", "name": "function_name", "check": null},
      {"type": "input_value", "name": "function_params", "check": null}
    ]
  };
  Blockly.Blocks["function_def"] = {
    init: function () {
      this.jsonInit(function_def);
      this.appendStatementInput("function_statements").setCheck(null);
      // this.setPreviousStatement(true, null);
      // this.setNextStatement(true, null);
      this.setColour("%{BKY_FUNCTIONS_COLOR}");
      this.setTooltip("Définition d'une fonction");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/tutorial/controlflow.html#defining-functions"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("function_params").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">param1,param2</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      var connection2 = this.getInput("function_name").connection;
      var otherConnection2 = connection2.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">fonction</field></shadow>' +
          "</xml>"
      ).children[0];
      connection2.setShadowDom(dom);
      connection2.respawnShadow_();
      connection2.connect(otherConnection2);
    },
  };

  // Function call
  var function_call = {
    "message0": Blockly.Msg['function_call'],
    "args0": [
      {"type": "input_value", "name": "function_name", "check": null},
      {"type": "input_value", "name": "function_params", "check": null}
    ]
  };
  Blockly.Blocks["function_call"] = {
    init: function () {
      this.jsonInit(function_call);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_FUNCTIONS_COLOR}");
      this.setTooltip("Appel d'une fonction");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/tutorial/controlflow.html#defining-functions"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("function_params").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">param1,param2</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      var connection = this.getInput("function_name").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">fonction</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // Return
  var function_return = {
    "message0": Blockly.Msg['function_return'],
    "args0": [
      {"type": "input_value", "name": "return_value", "check": null},
    ]
  };
  Blockly.Blocks["function_return"] = {
    init: function () {
      this.jsonInit(function_return);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setColour("%{BKY_FUNCTIONS_COLOR}");
      this.setTooltip(
        "Renvoie une valeur, à utiliser à la fin des instructions d'une fonction"
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/tutorial/controlflow.html#defining-functions"
      );
    },
  };
}
