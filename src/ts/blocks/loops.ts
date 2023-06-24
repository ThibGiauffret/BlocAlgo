import * as Blockly from "blockly";

export function setLoops() {
  // Boucles
  Blockly.Blocks["boucle_for"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("for")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("in range (")
        .appendField(new Blockly.FieldNumber(0), "start")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(10), "end")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(1), "step")
        .appendField("):");
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
    },
  };

  Blockly.Blocks["boucle_for_in"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("for")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("in");
      this.appendValueInput("list").setCheck(null);
      this.appendDummyInput().appendField(":");
      this.appendStatementInput("content").setCheck("Boolean");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_LOOPS_COLOR}");
      this.setTooltip("Instruction de boucle 'pour'");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["boucle_while"] = {
    init: function () {
      this.appendDummyInput().appendField("while");
      this.appendValueInput("condition").setCheck("Boolean");
      this.appendDummyInput().appendField(":");
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
