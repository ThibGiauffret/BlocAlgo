/* eslint-disable */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
      // AMD
      define([], factory);
    } else if (typeof exports === "object") {
      // Node.js
      module.exports = factory();
    } else {
      // Browser
      var messages = factory();
      for (var key in messages) {
        root.Blockly.Msg[key] = messages[key];
      }
    }
  })(this, function () {
    // This file was automatically generated.  Do not modify.
  
    "use strict";
  
    var Blockly = Blockly || { Msg: Object.create(null) };

    // Variables
    Blockly.Msg["NEW_VARIABLE"] = "Créer une variable...";
    Blockly.Msg["VARIABLES_SET"] = "%1 = %2";
    Blockly.Msg["MATH_CHANGE_TITLE"] = "%1 += %2";

    // Functions
    Blockly.Msg["function_def"] = "def %1 ( %2 ):";
    Blockly.Msg["function_call"] = "%1 ( %2 )";
    Blockly.Msg["function_return"] = "return %1";

    // Graph
    Blockly.Msg["matplotlib_plot"] = 'plt.plot( %1 , %2 , label = "%3" , color = "%4" , marker = "%5" )';
    Blockly.Msg["matplotlib_plot2"] = 'plt.plot( %1 , %2 , "%3" )';
    Blockly.Msg["matplotlib_show"] = 'plt.show()';
    Blockly.Msg["matplotlib_title"] = 'plt.title(" %1 ")';
    Blockly.Msg["matplotlib_xlabel"] = 'plt.xlabel(" %1 ")';
    Blockly.Msg["matplotlib_ylabel"] = 'plt.ylabel(" %1 ")';
    Blockly.Msg["matplotlib_legend"] = 'plt.legend()';
    Blockly.Msg["matplotlib_grid"] = 'plt.grid()';
    
    // Import
    Blockly.Msg["import_numpy"] = 'import numpy as np';
    Blockly.Msg["import_turtle"] = 'from turtle import *';
    Blockly.Msg["import_matplotlib"] = 'import matplotlib.pyplot as plt';
    Blockly.Msg["import_random"] = 'import random';
    Blockly.Msg["import_time"] = 'import time';
    Blockly.Msg["import_math"] = 'import math';
    Blockly.Msg["import_pil"] = 'from PIL import Image';

    // Lists
    Blockly.Msg["list_create"] = '%1 = %2';
    Blockly.Msg["list_add"] = '%1.append ( %2 )';
    Blockly.Msg["list_get"] = '%1[ %2 ]';
    Blockly.Msg["list_set"] = '%1[ %2 ] = %3';

    // Conditions
    Blockly.Msg["condition_if"] = "if %1 :";
    Blockly.Msg["condition_else"] = "else :";
    Blockly.Msg["condition_elif"] = "elif %1 :";
    Blockly.Msg["condition_and"] = "and";
    Blockly.Msg["condition_or"] = "or";
    Blockly.Msg["condition_not"] = "not %1";
  
    // Loops
    Blockly.Msg['boucle_for'] = "for %1 in range ( %2 , %3 , %4 ) :";
    Blockly.Msg['boucle_for_in'] = "for %1 in %2 :";
    Blockly.Msg['boucle_while'] = "while %1 :";

    // Math
    Blockly.Msg["math_cos"] = "math.cos ( %1 )";
    Blockly.Msg["math_sin"] = "math.sin ( %1 )";
    Blockly.Msg["math_tan"] = "math.tan ( %1 )";
    Blockly.Msg["math_acos"] = "math.acos ( %1 )";
    Blockly.Msg["math_asin"] = "math.asin ( %1 )";
    Blockly.Msg["math_atan"] = "math.atan ( %1 )";
    Blockly.Msg["math_exp"] = "math.exp ( %1 )";
    Blockly.Msg["math_log"] = "math.log ( %1 )";
    Blockly.Msg["math_log10"] = "math.log10 ( %1 )";
    Blockly.Msg["math_sqrt"] = "math.sqrt ( %1 )";
    Blockly.Msg["math_pow"] = "math.pow ( %1 , %2 )";
    Blockly.Msg["math_ceil"] = "math.ceil ( %1 )";
    Blockly.Msg["math_floor"] = "math.floor ( %1 )";
    Blockly.Msg["math_abs"] = "math.fabs ( %1 )";
    Blockly.Msg["math_round"] = "math.round ( %1 )";
    Blockly.Msg["math_trunc"] = "math.trunc ( %1 )";
    Blockly.Msg["math_min"] = "min ( %1 )";
    Blockly.Msg["math_max"] = "max ( %1 )";
    Blockly.Msg["math_add"] = "+";
    Blockly.Msg["math_sub"] = "-";
    Blockly.Msg["math_mul"] = "*";
    Blockly.Msg["math_div"] = "/";
    Blockly.Msg["math_mod"] = "%";
    Blockly.Msg["math_pow2"] = "**";
    Blockly.Msg["math_floordiv"] = "//";
    Blockly.Msg["math_operator"] = "%1 %2 %3";

    // PIL
    Blockly.Msg["pil_open"] = '%1 = Image.open ( %2 )';
    Blockly.Msg["pil_show"] = '%1.show()';
    Blockly.Msg["pil_size"] = '%1.size';
    Blockly.Msg["pil_resize"] = '%1 = %2.resize ( %3 )';
    Blockly.Msg["pil_rotate"] = '%1 = %2.rotate ( %3 )';
    Blockly.Msg["pil_crop"] = '%1 = %2.crop ( %3 )';
    Blockly.Msg["pil_getpixel"] = '%1.getpixel ( %2 )';
    Blockly.Msg["pil_putpixel"] = '%1.putpixel ( %2 , %3 )';
    
    // Random
    Blockly.Msg["random_random"] = "random.random()";
    Blockly.Msg["random_randint"] = "random.randint ( %1 , %2 )";
    Blockly.Msg["random_choice"] = "random.choice ( %1 )";
    Blockly.Msg["random_shuffle"] = "random.shuffle ( %1 )";
    Blockly.Msg["random_uniform"] = "random.uniform ( %1 , %2 )";
    Blockly.Msg["random_randrange"] = "random.randrange ( %1 , %2 , %3 )";
    Blockly.Msg["random_sample"] = "random.sample ( %1 , %2 )";
    Blockly.Msg["random_seed"] = "random.seed ( %1 )";

    // Statements
    Blockly.Msg["time_sleep"] = "time.sleep ( %1 )";
    Blockly.Msg["print"] = "print ( %1 )";
    Blockly.Msg["input"] = "%1 = input ( %2 )";
    Blockly.Msg["pass"] = "pass";
    Blockly.Msg["len"] = "len ( %1 )";
    Blockly.Msg["int"] = "int ( %1 )";
    Blockly.Msg["float"] = "float ( %1 )";
    Blockly.Msg["str"] = "str ( %1 )";
    Blockly.Msg["list"] = "list ( %1 )";
    Blockly.Msg["round"] = "round ( %1 )";
    Blockly.Msg["range"] = "range ( %1 , %2 , %3 )";

    // Turtle
    Blockly.Msg["turtle_init"] = "%1 = Turtle()";
    Blockly.Msg["turtle_mainloop"] = "mainloop()";
    Blockly.Msg["turtle_forward"] = "%1.forward ( %2 )";
    Blockly.Msg["turtle_backward"] = "%1.backward ( %2 )";
    Blockly.Msg["turtle_right"] = "%1.right ( %2 )";
    Blockly.Msg["turtle_left"] = "%1.left ( %2 )";
    Blockly.Msg["turtle_penup"] = "%1.penup()";
    Blockly.Msg["turtle_pendown"] = "%1.pendown()";
    Blockly.Msg["turtle_pencolor"] = "%1.pencolor ( %2 )";
    Blockly.Msg["turtle_speed"] = "%1.speed ( %2 )";
    Blockly.Msg["turtle_width"] = "%1.width ( %2 )";
    Blockly.Msg["turtle_goto"] = "%1.goto ( %2 , %3 )";
    Blockly.Msg["turtle_circle"] = "%1.circle ( %2 , %3 )";

    return Blockly.Msg;
  });
  