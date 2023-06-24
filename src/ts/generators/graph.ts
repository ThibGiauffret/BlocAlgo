// import * as Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

export function setGraphGen() {
  // matplotlib plot
  pythonGenerator["matplotlib_plot"] = function (block: any) {
    var value_x = pythonGenerator.valueToCode(
      block,
      "X",
      pythonGenerator.ORDER_NONE
    );
    var value_y = pythonGenerator.valueToCode(
      block,
      "Y",
      pythonGenerator.ORDER_NONE
    );
    var label = block.getFieldValue("LABEL");
    var color = block.getFieldValue("COLOR");
    var marker = block.getFieldValue("MARKER");
    var code =
      "plt.plot(" +
      value_x +
      ", " +
      value_y +
      ", label='" +
      label +
      "', color='" +
      color +
      "', marker='" +
      marker +
      "')\n";
    return code;
  };

  // matplotlib plot
  pythonGenerator["matplotlib_plot2"] = function (block: any) {
    var value_x = pythonGenerator.valueToCode(
      block,
      "X",
      pythonGenerator.ORDER_NONE
    );
    var value_y = pythonGenerator.valueToCode(
      block,
      "Y",
      pythonGenerator.ORDER_NONE
    );
    var param = block.getFieldValue("param");
    var code = "plt.plot(" + value_x + ", " + value_y + ', "' + param + '")\n';
    return code;
  };

  // matplotlib show
  pythonGenerator["matplotlib_show"] = function (block: any) {
    var code = "plt.show()\n";
    return code;
  };

  // matplotlib title
  pythonGenerator["matplotlib_title"] = function (block: any) {
    var value_title = pythonGenerator.valueToCode(
      block,
      "TITLE",
      pythonGenerator.ORDER_NONE
    );
    var code = 'plt.title("' + value_title + '")\n';
    return code;
  };

  // matplotlib xlabel
  pythonGenerator["matplotlib_xlabel"] = function (block: any) {
    var value_xlabel = pythonGenerator.valueToCode(
      block,
      "LABEL",
      pythonGenerator.ORDER_NONE
    );
    var code = 'plt.xlabel("' + value_xlabel + '")\n';
    return code;
  };

  // matplotlib ylabel
  pythonGenerator["matplotlib_ylabel"] = function (block: any) {
    var value_ylabel = pythonGenerator.valueToCode(
      block,
      "LABEL",
      pythonGenerator.ORDER_NONE
    );
    var code = 'plt.ylabel("' + value_ylabel + '")\n';
    return code;
  };

  // matplotlib legend
  pythonGenerator["matplotlib_legend"] = function (block: any) {
    var code = "plt.legend()\n";
    return code;
  };

  // matplotlib grid
  pythonGenerator["matplotlib_grid"] = function (block: any) {
    var code = "plt.grid()\n";
    return code;
  };
}
