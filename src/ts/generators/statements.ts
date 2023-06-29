import * as Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

export function setStatementsGen() {
  // Déclarations
  pythonGenerator["value"] = function (block: any) {
    var value = block.getFieldValue("VALUE");

    var code = value;
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["value_number"] = function (block: any) {
    var value = block.getFieldValue("VALUE");

    return [value, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["string"] = function (block: any) {
    var value = block.getFieldValue("VALUE");
    return ['"'+value+'"', pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["list_def"] = function (block: any) {
    var value = block.getFieldValue("VALUE");
    return ['['+value+']', pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["tuple_def"] = function (block: any) {
    var value = block.getFieldValue("VALUE");
    return ['('+value+')', pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["time_sleep"] = function (block: any) {
    var value_time = block.getFieldValue("time_value");

    var code = "time.sleep(" + value_time + ")\r\n";
    return code;
  };

  pythonGenerator["print"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "PRINT",
      pythonGenerator.ORDER_NONE
    );
    // strip parentheses
    if (value[0] == "(" && value[value.length - 1] == ")") {
      value = value.substring(1, value.length - 1);
    }
    var code = "print(" + value + ")\r\n";
    return code;
  };


  pythonGenerator["input"] = function (block: any) {
    var variable = pythonGenerator.variableDB_.getName(
      block.getFieldValue("input_var"),
      Blockly.Names.NameType.VARIABLE
    );
    var message = pythonGenerator.valueToCode(
      block,
      "input_message",
      pythonGenerator.ORDER_NONE
    );
    var code = variable + ' = input(' + message + ')\r\n';
    return code;
  };

  pythonGenerator["len"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "len_value",
      pythonGenerator.ORDER_NONE
    );
    var code = "len(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["int"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "int_value",
      pythonGenerator.ORDER_NONE
    );
    var code = "int(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["float"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "float_value",
      pythonGenerator.ORDER_NONE
    );
    var code = "int(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["str"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "str_value",
      pythonGenerator.ORDER_NONE
    );
    var code = "str(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["list"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "list_value",
      pythonGenerator.ORDER_NONE
    );
    var code = "list(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["round"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "round_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "round(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["range"] = function (block: any) {
    var value_start = block.getFieldValue("range_start");
    var value_end = block.getFieldValue("range_end");
    var value_step = block.getFieldValue("range_step");
    var code =
      "range(" + value_start + "," + value_end + "," + value_step + ")";
    return code;
  };

  pythonGenerator["container"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "container_value",
      pythonGenerator.ORDER_NONE
    );

    var code =  value + "\r\n";
    return code;
  };
}
