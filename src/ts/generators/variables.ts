//  Variables
import * as Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

export function setVariablesGen() {
  pythonGenerator["math_change"] = function (block: any) {
    // Add to a variable in place.
    pythonGenerator.definitions_["from_numbers_import_Number"] =
      "from numbers import Number";
    const argument0 =
      pythonGenerator.valueToCode(
        block,
        "DELTA",
        pythonGenerator.ORDER_ADDITIVE
      ) || "0";
    const varName = pythonGenerator.nameDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    return varName + " += " + argument0 + "\n";
  };
}
