// import * as Blockly from "blockly";
import { pythonGenerator } from "blockly/python";

export function setRandomGen() {
  // random.random
  pythonGenerator["random_random"] = function (block: any) {
    return ["random.random()", pythonGenerator.ORDER_NONE];
  };

  // random.randint
  pythonGenerator["random_randint"] = function (block: any) {
    var text_min = pythonGenerator.valueToCode(
      block,
      "min",
      pythonGenerator.ORDER_NONE
    );
    var text_max = pythonGenerator.valueToCode(
      block,
      "max",
      pythonGenerator.ORDER_NONE
    );
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
    var text_k = pythonGenerator.valueToCode(
      block,
      "k",
      pythonGenerator.ORDER_NONE
    );
    return [
      "random.sample(" + value_list + "," + text_k + ")",
      pythonGenerator.ORDER_NONE,
    ];
  };

  // random.uniform
  pythonGenerator["random_uniform"] = function (block: any) {
    var text_min = pythonGenerator.valueToCode(
      block,
      "min",
      pythonGenerator.ORDER_NONE
    );
    var text_max = pythonGenerator.valueToCode(
      block,
      "max",
      pythonGenerator.ORDER_NONE
    );
    return [
      "random.uniform(" + text_min + "," + text_max + ")",
      pythonGenerator.ORDER_NONE,
    ];
  };

  // random.randrange
  pythonGenerator["random_randrange"] = function (block: any) {
    var text_start = pythonGenerator.valueToCode(
      block,
      "start",
      pythonGenerator.ORDER_NONE
    );
    var text_stop = pythonGenerator.valueToCode(
      block,
      "stop",
      pythonGenerator.ORDER_NONE
    );
    var text_step = pythonGenerator.valueToCode(
      block,
      "step",
      pythonGenerator.ORDER_NONE
    );
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
    var text_seed = pythonGenerator.valueToCode(
      block,
      "seed",
      pythonGenerator.ORDER_NONE
    );
    return "random.seed(" + text_seed + ")\r\n";
  };
}
