// import * as Blockly from "../../lib/blockly";
import { pythonGenerator } from "../../lib/blockly/python";

export function setRandomGen() {
  // random.random
  pythonGenerator["random_random"] = function (block: any) {
    return ["random.random()", pythonGenerator.ORDER_NONE];
  };

  // random.randint
  pythonGenerator["random_randint"] = function (block: any) {
    var text_min = block.getFieldValue("min");
    var text_max = block.getFieldValue("max");
    return [
      "random.randint(" + text_min + "," + text_max + ")",
      pythonGenerator.ORDER_NONE,
    ];
  };

  // random.choice
  pythonGenerator["random_choice"] = function (block: any) {
    var value_list = pythonGenerator.valueToCode(
      block,
      "list",
      pythonGenerator.ORDER_NONE
    );
    var code = "random.choice(" + value_list + ")";
    return [code, pythonGenerator.ORDER_NONE];
  };

  // random.shuffle
  pythonGenerator["random_shuffle"] = function (block: any) {
    var value_list = pythonGenerator.valueToCode(
      block,
      "list",
      pythonGenerator.ORDER_NONE
    );
    return "random.shuffle(" + value_list + ")\r\n";
  };

  // random.sample
  pythonGenerator["random_sample"] = function (block: any) {
    var value_list = pythonGenerator.valueToCode(
      block,
      "list",
      pythonGenerator.ORDER_NONE
    );
    var text_k = block.getFieldValue("k");
    return [
      "random.sample(" + value_list + "," + text_k + ")",
      pythonGenerator.ORDER_NONE,
    ];
  };

  // random.uniform
  pythonGenerator["random_uniform"] = function (block: any) {
    var text_min = block.getFieldValue("min");
    var text_max = block.getFieldValue("max");
    return [
      "random.uniform(" + text_min + "," + text_max + ")",
      pythonGenerator.ORDER_NONE,
    ];
  };

  // random.randrange
  pythonGenerator["random_randrange"] = function (block: any) {
    var text_start = block.getFieldValue("min");
    var text_stop = block.getFieldValue("max");
    var text_step = block.getFieldValue("step");
    return [
      "random.randrange(" +
        text_start +
        "," +
        text_stop +
        "," +
        text_step +
        ")",
      pythonGenerator.ORDER_NONE,
    ];
  };

  // random.seed
  pythonGenerator["random_seed"] = function (block: any) {
    var text_seed = block.getFieldValue("seed");
    return "random.seed(" + text_seed + ")\r\n";
  };
}
