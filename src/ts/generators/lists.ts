import * as Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

export function setListsGen() {
  pythonGenerator["list_create"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("list_name"),
      Blockly.Names.NameType.VARIABLE
    );
    var value = pythonGenerator.valueToCode(
      block,
      "list_values",
      pythonGenerator.ORDER_NONE
    );

    var code = variable_var + " = " + value + "\r\n";
    return code;
  };

  pythonGenerator["list_add"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("list_name"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_list_value = pythonGenerator.valueToCode(
      block,
      "list_value",
      pythonGenerator.ORDER_NONE
    );

    var code = variable_var + ".append(" + value_list_value + ")\r";
    return code;
  };

  pythonGenerator["list_get"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("list_name"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_list_value = pythonGenerator.valueToCode(
      block,
      "list_index",
      pythonGenerator.ORDER_NONE
    );

    var code = variable_var + "[" + value_list_value + "]";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["list_set"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("list_name"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_list_value = pythonGenerator.valueToCode(
      block,
      "list_index",
      pythonGenerator.ORDER_NONE
    );
    var value_list_set = pythonGenerator.valueToCode(
      block,
      "list_value",
      pythonGenerator.ORDER_NONE
    );

    var code =
      variable_var+ "[" + value_list_value + "] = " + value_list_set + "\r";
    return code;
  };
}
