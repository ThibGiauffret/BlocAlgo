import * as Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

export function setTurtleGen() {
  // turtle init
  pythonGenerator["turtle_init"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    return variable_var + " = Turtle()\r\n";
  };

  //   turtle mainloop
  pythonGenerator["turtle_mainloop"] = function (block: any) {
    return "mainloop()\r\n";
  };

  // turtle forward
  pythonGenerator["turtle_forward"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_distance = pythonGenerator.valueToCode(
      block,
      "distance",
      pythonGenerator.ORDER_NONE
    );
    return variable_var + ".forward(" + value_distance + ")\r\n";
  };

  // turtle backward
  pythonGenerator["turtle_backward"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_distance = pythonGenerator.valueToCode(
      block,
      "distance",
      pythonGenerator.ORDER_NONE
    );
    return variable_var + ".backward(" + value_distance + ")\r\n";
  };

  // turtle left
  pythonGenerator["turtle_left"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_angle = pythonGenerator.valueToCode(
      block,
      "angle",
      pythonGenerator.ORDER_NONE
    );
    return variable_var + ".left(" + value_angle + ")\r\n";
  };

  // turtle right
  pythonGenerator["turtle_right"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_angle = pythonGenerator.valueToCode(
      block,
      "angle",
      pythonGenerator.ORDER_NONE
    );
    return variable_var + ".right(" + value_angle + ")\r\n";
  };

  // turtle penup
  pythonGenerator["turtle_penup"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    return variable_var + ".penup()\r\n";
  };

  // turtle pendown
  pythonGenerator["turtle_pendown"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    return variable_var + ".pendown()\r\n";
  };

  // turtle pencolor

  pythonGenerator["turtle_pencolor"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_color = pythonGenerator.valueToCode(
      block,
      "color",
      pythonGenerator.ORDER_NONE
    );
    return variable_var + ".pencolor(" + value_color + ")\r\n";
  };

  // turtle speed
  pythonGenerator["turtle_speed"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_speed = pythonGenerator.valueToCode(
      block,
      "speed",
      pythonGenerator.ORDER_NONE
    );
    return variable_var + ".speed(" + value_speed + ")\r\n";
  };

  // turtle width
  pythonGenerator["turtle_width"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_width = pythonGenerator.valueToCode(
      block,
      "width",
      pythonGenerator.ORDER_NONE
    );
    return variable_var + ".width(" + value_width + ")\r\n";
  };

  // turtle goto
  pythonGenerator["turtle_goto"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_x = pythonGenerator.valueToCode(
      block,
      "x",
      pythonGenerator.ORDER_NONE
    );
    var value_y = pythonGenerator.valueToCode(
      block,
      "y",
      pythonGenerator.ORDER_NONE
    );
    return variable_var + ".goto(" + value_x + "," + value_y + ")\r\n";
  };

  // turtle circle
  pythonGenerator["turtle_circle"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR"),
      Blockly.Names.NameType.VARIABLE
    );
    var value_radius = pythonGenerator.valueToCode(
      block,
      "radius",
      pythonGenerator.ORDER_NONE
    );
    var value_angle = pythonGenerator.valueToCode(
      block,
      "angle",
      pythonGenerator.ORDER_NONE
    );
    return (
      variable_var + ".circle(" + value_radius + "," + value_angle + ")\r\n"
    );
  };
}
