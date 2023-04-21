import * as Blockly from "../../lib/blockly";

export function setFunctions() {
  // Fonctions
  // Définition d'une fonction avec statement
  Blockly.Blocks["function_def"] = {
    init: function () {
      this.appendDummyInput().appendField("def ");
      this.appendValueInput("function_name").setCheck(null);
      this.appendDummyInput().appendField(" (");
      this.appendValueInput("function_params").setCheck(null);
      this.appendDummyInput().appendField(") :");
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
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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

  Blockly.Blocks["function_call"] = {
    init: function () {
      this.appendValueInput("function_name").setCheck(null);
      this.appendDummyInput().appendField(" (");
      this.appendValueInput("function_params").setCheck(null);
      this.appendDummyInput().appendField(")");
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
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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

  // return
  Blockly.Blocks["function_return"] = {
    init: function () {
      this.appendDummyInput().appendField("return");
      this.appendValueInput("return_value").setCheck(null);
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
