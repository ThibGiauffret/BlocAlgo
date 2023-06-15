// import * as Blockly from "../../lib/blockly";
import { pythonGenerator } from "../../lib/blockly/python";

export function setImportGen() {
  // Importation
  pythonGenerator["import_numpy"] = function () {
    var code = "import numpy as np\r\n";
    return code;
  };

  pythonGenerator["import_turtle"] = function () {
    var code = "from turtle import *\r\n";
    return code;
  };

  pythonGenerator["import_random"] = function () {
    var code = "import random\r\n";
    return code;
  };

  pythonGenerator["import_math"] = function () {
    var code = "import math\r\n";
    return code;
  };

  pythonGenerator["import_time"] = function () {
    var code = "import time\r\n";
    return code;
  };

  pythonGenerator["import_matplotlib"] = function () {
    var code = "import matplotlib.pyplot as plt\r\n";
    return code;
  };

  pythonGenerator["import_pil"] = function () {
    var code = "from PIL import Image\r\n";
    return code;
  }
}
