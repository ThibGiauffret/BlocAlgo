import * as Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

export function setPILGen() {
  // pil init
  pythonGenerator["pil_open"] = function (block: any) {
    var variable_var = pythonGenerator.variableDB_.getName(
      block.getFieldValue("VAR1"),
      Blockly.Names.NameType.VARIABLE
    );
    var path_var = pythonGenerator.valueToCode(
        block,
        "path_value",
        pythonGenerator.ORDER_NONE
        );

    return variable_var + ' = Image.open(' + path_var  + ')\r\n';
  };

  //   pil show
    pythonGenerator["pil_show"] = function (block: any) {
        var variable_var = pythonGenerator.variableDB_.getName(
            block.getFieldValue("VAR1"),
            Blockly.Names.NameType.VARIABLE
          );
        return variable_var + ".show()\r\n";
    }

    // pil size
    pythonGenerator["pil_size"] = function (block: any) {
        var variable_var = pythonGenerator.variableDB_.getName(
            block.getFieldValue("VAR1"),
            Blockly.Names.NameType.VARIABLE
            );
        return [variable_var + ".size", pythonGenerator.ORDER_NONE];
    }

    //   pil resize
    pythonGenerator["pil_resize"] = function (block: any) {
        var variable_var = pythonGenerator.variableDB_.getName(
            block.getFieldValue("VAR1"),
            Blockly.Names.NameType.VARIABLE
          );

          var variable_var2 = pythonGenerator.variableDB_.getName(
            block.getFieldValue("VAR2"),
            Blockly.Names.NameType.VARIABLE
          );
        var dim_var = pythonGenerator.valueToCode(
            block,
            "dim_value",
            pythonGenerator.ORDER_NONE
            );
        return variable_var+"="+variable_var2 + ".resize(" + dim_var + ")\r\n";
    }

    //   pil rotate
    pythonGenerator["pil_rotate"] = function (block: any) {
        var variable_var = pythonGenerator.variableDB_.getName(
            block.getFieldValue("VAR1"),
            Blockly.Names.NameType.VARIABLE
          );
          var variable_var2 = pythonGenerator.variableDB_.getName(
            block.getFieldValue("VAR2"),
            Blockly.Names.NameType.VARIABLE
          );
        var angle_var = pythonGenerator.valueToCode(
            block,
            "angle_value",
            pythonGenerator.ORDER_NONE
            );
        return variable_var+"="+variable_var2 + ".rotate(" + angle_var + ")\r\n";
    }

    // //   pil save
    // pythonGenerator["pil_save"] = function (block: any) {
    //     var variable_var = pythonGenerator.variableDB_.getName(
    //         block.getFieldValue("VAR1"),
    //         Blockly.Names.NameType.VARIABLE
    //       );
    //     var path_var = pythonGenerator.valueToCode(
    //         block,
    //         "path_value",
    //         pythonGenerator.ORDER_NONE
    //         );
    //     return variable_var + ".save(" + path_var + ")\r\n";
    // }

    //   pil crop
    pythonGenerator["pil_crop"] = function (block: any) {
        var variable_var = pythonGenerator.variableDB_.getName(
            block.getFieldValue("VAR1"),
            Blockly.Names.NameType.VARIABLE
          );
          var variable_var2 = pythonGenerator.variableDB_.getName(
            block.getFieldValue("VAR2"),
            Blockly.Names.NameType.VARIABLE
          );
        var border_var = pythonGenerator.valueToCode(
            block,
            "border_value",
            pythonGenerator.ORDER_NONE
            );

        return variable_var + "="+variable_var2 + ".crop(" + border_var  + ")\r\n";
    }

    //   pil getpixel
    pythonGenerator["pil_getpixel"] = function (block: any) {
        var variable_var = pythonGenerator.variableDB_.getName(
            block.getFieldValue("VAR1"),
            Blockly.Names.NameType.VARIABLE
          );
        var pos_var = pythonGenerator.valueToCode(
            block,
            "pos_value",
            pythonGenerator.ORDER_NONE
            );
        var code = variable_var + ".getpixel(" + pos_var + ")";
        return [code, pythonGenerator.ORDER_NONE];
    }

    //   pil putpixel
    pythonGenerator["pil_putpixel"] = function (block: any) {
        var variable_var = pythonGenerator.variableDB_.getName(
            block.getFieldValue("VAR1"),
            Blockly.Names.NameType.VARIABLE
          );
        var pos_var = pythonGenerator.valueToCode(
            block,
            "pos_value",
            pythonGenerator.ORDER_NONE
            );
        var color_var = pythonGenerator.valueToCode(
            block,
            "color_value",
            pythonGenerator.ORDER_NONE
            );
        return variable_var + ".putpixel(" + pos_var  + "," + color_var + ")\r\n";
    }


}