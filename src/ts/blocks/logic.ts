import * as Blockly from "blockly";

export function setLogic() {
  // Conditions
  Blockly.Blocks["condition_if"] = {
    init: function () {
      this.appendDummyInput().appendField("if");
      this.appendValueInput("condition").setCheck("Boolean");
      this.appendDummyInput().appendField(":");
      this.appendStatementInput("content").setCheck("Boolean");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LOGIC_COLOR}");
      this.setTooltip(
        "Instruction conditionnelle 'si' pour tester si une condition est vraie ou fausse"
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/reference/compound_stmts.html#the-if-statement"
      );
    },
  };

  Blockly.Blocks["condition_else"] = {
    init: function () {
      this.appendDummyInput().appendField("else:");
      this.appendStatementInput("content").setCheck("Boolean");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LOGIC_COLOR}");
      this.setTooltip(
        "Instruction conditionnelle 'sinon' (à positionner après un 'si' ou un 'sinon si')"
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/reference/compound_stmts.html#the-if-statement"
      );
    },
  };

  Blockly.Blocks["condition_elif"] = {
    init: function () {
      this.appendDummyInput().appendField("elif");
      this.appendValueInput("condition").setCheck("Boolean");
      this.appendDummyInput().appendField(":");
      this.appendStatementInput("content").setCheck("Boolean");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LOGIC_COLOR}");
      this.setTooltip(
        "Instruction conditionnelle 'sinon si' (à positionner après un 'si' ou un 'sinon si')"
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/reference/compound_stmts.html#the-if-statement"
      );
    },
  };

  Blockly.Blocks["condition"] = {
    init: function () {
      this.appendValueInput("condition_first_value").setCheck(null);
      this.appendDummyInput().appendField(
        new Blockly.FieldDropdown([
          ["==", "=="],
          ["!=", "!="],
          [">", ">"],
          ["<", "<"],
          [">=", ">="],
          ["<=", "<="],
        ]),
        "condition_comp"
      );
      this.appendValueInput("condition_second_value").setCheck(null);
      this.setOutput(true, "Boolean");
      this.setColour("%{BKY_LOGIC_COLOR}");
      this.setTooltip("Condition, renvoie un booléen");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/reference/expressions.html#comparisons"
      );
      this.updateShadow();
    },

    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("condition_first_value").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">0</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      var connection = this.getInput("condition_second_value").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">0</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  Blockly.Blocks["condition2"] = {
    init: function () {
      this.appendValueInput("condition_first_value").setCheck(null);
      this.appendDummyInput().appendField(
        new Blockly.FieldDropdown([
          ["and", "and"],
          ["or", "or"],
        ]),
        "condition_comp"
      );
      this.appendValueInput("condition_second_value").setCheck(null);
      this.setOutput(true, "Boolean");
      this.setColour("%{BKY_LOGIC_COLOR}");
      this.setTooltip(
        "Comparaison de 2 booléens ('et' et 'ou'), renvoie un booléen"
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/reference/expressions.html#comparisons"
      );
      this.updateShadow();
    },

    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("condition_first_value").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">True</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      var connection = this.getInput("condition_second_value").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">True</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  Blockly.Blocks["condition_not"] = {
    init: function () {
      this.appendValueInput("condition_value_not")
        .setCheck(null)
        .appendField("not");
      this.setOutput(true, "Boolean");
      this.setColour("%{BKY_LOGIC_COLOR}");
      this.setTooltip("Renverse le booléen");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/reference/expressions.html#comparisons"
      );
      this.updateShadow();
    },

    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("condition_value_not").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">True</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };
}
