import * as Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

export function setLoopsGen() {
  // Boucles
  pythonGenerator["boucle_for"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );

    var value_start = block.getFieldValue("start");
    var value_end = block.getFieldValue("end");
    var value_step = block.getFieldValue("step");

    var content = pythonGenerator.statementToCode(block, "content");

    var code =
      "for " +
      variable_var +
      " in range(" +
      value_start +
      "," +
      value_end +
      "," +
      value_step +
      "):\r\n" +
      content;
    return code;
  };

  pythonGenerator["boucle_for_in"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );

    var list = pythonGenerator.valueToCode(
      block,
      "list",
      pythonGenerator.ORDER_NONE
    );

    var content = pythonGenerator.statementToCode(block, "content");

    var code = "for " + variable_var + " in " + list + ":\r\n" + content;
    return code;
  };

  pythonGenerator["boucle_while"] = function (block: any) {
    var value_condition = pythonGenerator.valueToCode(
      block,
      "condition",
      pythonGenerator.ORDER_NONE
    );
    var content = pythonGenerator.statementToCode(block, "content");

    var code = "while " + value_condition + ":\r\n" + content;
    return code;
  };
}
