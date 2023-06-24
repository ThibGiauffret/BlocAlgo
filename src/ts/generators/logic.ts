// import * as Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

export function setLogicGen() {
  // Conditions
  pythonGenerator["condition_if"] = function (block: any) {
    var value_condition = pythonGenerator.valueToCode(
      block,
      "condition",
      pythonGenerator.ORDER_NONE
    );
    var content = pythonGenerator.statementToCode(block, "content");

    var code = "if " + value_condition + ":\r\n" + content;
    return code;
  };

  pythonGenerator["condition_elif"] = function (block: any) {
    var value_condition = pythonGenerator.valueToCode(
      block,
      "condition",
      pythonGenerator.ORDER_NONE
    );
    var content = pythonGenerator.statementToCode(block, "content");

    var code = "elif " + value_condition + ":\r\n" + content;
    return code;
  };

  pythonGenerator["condition_else"] = function (block: any) {
    var content = pythonGenerator.statementToCode(block, "content");

    var code = "else:\r\n" + content;
    return code;
  };

  pythonGenerator["condition"] = function (block: any) {
    var comp = block.getFieldValue("condition_comp");

    var first = pythonGenerator.valueToCode(
      block,
      "condition_first_value",
      pythonGenerator.ORDER_NONE
    );

    var second = pythonGenerator.valueToCode(
      block,
      "condition_second_value",
      pythonGenerator.ORDER_NONE
    );

    // strip parentheses
    if (first[0] == "(" && first[first.length - 1] == ")") {
      first = first.substring(1, first.length - 1);
    }

    // strip parentheses
    if (second[0] == "(" && second[second.length - 1] == ")") {
      second = second.substring(1, second.length - 1);
    }

    var code = first + comp + second;
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["condition2"] = function (block: any) {
    var comp = block.getFieldValue("condition_comp");

    var first = pythonGenerator.valueToCode(
      block,
      "condition_first_value",
      pythonGenerator.ORDER_NONE
    );

    var second = pythonGenerator.valueToCode(
      block,
      "condition_second_value",
      pythonGenerator.ORDER_NONE
    );

    // strip parentheses
    if (first[0] == "(" && first[first.length - 1] == ")") {
      first = first.substring(1, first.length - 1);
    }

    // strip parentheses
    if (second[0] == "(" && second[second.length - 1] == ")") {
      second = second.substring(1, second.length - 1);
    }

    var code = first + " " + comp + " " + second;
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["condition_not"] = function (block: any) {
    var value_condition = pythonGenerator.valueToCode(
      block,
      "condition_value_not",
      pythonGenerator.ORDER_NONE
    );

    var code = "not " + value_condition;
    return [code, pythonGenerator.ORDER_NONE];
  };
}
