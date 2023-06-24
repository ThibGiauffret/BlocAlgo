// import * as Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

export function setMathGen() {
  // Math
  pythonGenerator["math_operator"] = function (block: any) {
    var operator = block.getFieldValue("operator");

    var first = pythonGenerator.valueToCode(
      block,
      "first_value",
      pythonGenerator.ORDER_NONE
    );

    var second = pythonGenerator.valueToCode(
      block,
      "second_value",
      pythonGenerator.ORDER_NONE
    );

    var code = first + operator + second;
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_cos"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "cos_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.cos(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_sin"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "sin_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.sin(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_tan"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "tan_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.tan(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_acos"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "acos_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.acos(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_asin"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "asin_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.asin(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_atan"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "atan_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.atan(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_exp"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "exp_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.exp(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_log"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "log_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.log(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_log10"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "log10_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.log10(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_sqrt"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "sqrt_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.sqrt(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_pow"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "pow_value",
      pythonGenerator.ORDER_NONE
    );
    var value2 = pythonGenerator.valueToCode(
      block,
      "pow_value2",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.pow(" + value + "," + value2 + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_ceil"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "ceil_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.ceil(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_floor"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "floor_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.floor(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_round"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "round_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "round(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_trunc"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "trunc_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.trunc(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_abs"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "abs_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "math.fabs(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_max"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "max_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "max(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  pythonGenerator["math_min"] = function (block: any) {
    var value = pythonGenerator.valueToCode(
      block,
      "min_value",
      pythonGenerator.ORDER_NONE
    );

    var code = "min(" + value + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };
}
