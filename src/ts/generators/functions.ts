import * as Blockly from "../../lib/blockly";
import { pythonGenerator } from "../../lib/blockly/python";

export function setFunctionsGen() {
  // Fonctions
  pythonGenerator["function_def"] = function (block: any) {
    var name = pythonGenerator.valueToCode(
      block,
      "function_name",
      pythonGenerator.ORDER_NONE
    );
    var args = pythonGenerator.valueToCode(
      block,
      "function_params",
      pythonGenerator.ORDER_NONE
    );
    var statement = pythonGenerator.statementToCode(
      block,
      "function_statements"
    );

    var code = "def " + name + "(" + args + "):\n" + statement + "\n";
    return code;
  };

  pythonGenerator["function_call"] = function (block: any) {
    var name = pythonGenerator.valueToCode(
      block,
      "function_name",
      pythonGenerator.ORDER_NONE
    );
    var args = pythonGenerator.valueToCode(
      block,
      "function_params",
      pythonGenerator.ORDER_NONE
    );

    var code = name + "(" + args + ")\r\n";
    return code;
  };

  pythonGenerator["function_return"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "return_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "return " + value + "\r\n";
    return code;
  };

  //  Listes
  pythonGenerator["list_create"] = function (block: any) {
    //  get var name
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("list_name"),
      Blockly.Names.NameType.VARIABLE
    );
    console.log(variable_var);
    var value = pythonGenerator.valueToCode(
      block,
      "list_values",
      pythonGenerator.ORDER_NONE
    );

    var code = variable_var + " = [" + value + "]\r\n";
    return code;
  };
}
