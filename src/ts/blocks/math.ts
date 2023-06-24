import * as Blockly from "blockly";

export function setMath() {
  // Math operator block (same as condition)
  var math_operator = {
    "message0": Blockly.Msg["math_operator"],
    "args0": [
      {"type": "input_value", "name": "first_value", "check": null},
      {"type": "field_dropdown", "name": "operator", "options": [
        [Blockly.Msg["math_add"], '+'],
        [Blockly.Msg["math_sub"], '-'],
        [Blockly.Msg["math_mul"], '*'],
        [Blockly.Msg["math_div"], '/'],
        [Blockly.Msg["math_floordiv"], '//'],
        [Blockly.Msg["math_pow2"], '**'],
        [Blockly.Msg["math_mod"], '%'],
      ]},
      {"type": "input_value", "name": "second_value", "check": null}
    ],
    "inputsInline": true,
  };
  Blockly.Blocks["math_operator"] = {
    init: function () {
      this.jsonInit(math_operator);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Opérateurs mathématique");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("first_value").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">0</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      var connection = this.getInput("second_value").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">0</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // Math cos
  var math_cos =  {
    "message0": Blockly.Msg["math_cos"],
    "args0": [
      {"type": "input_value", "name": "cos_value", "check": null}
    ],
  };
  Blockly.Blocks["math_cos"] = {
    init: function () {
      this.jsonInit(math_cos);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le cosinus de x (x en radians)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.cos"
      );
    },
  };

  // Math sin
  var math_sin =  {
    "message0": Blockly.Msg["math_sin"],
    "args0": [
      {"type": "input_value", "name": "sin_value", "check": null}
    ],
  };
  Blockly.Blocks["math_sin"] = {
    init: function () {
      this.jsonInit(math_sin);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le sinus de x (x en radians)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.sin"
      );
    },
  };

  // Math tan
  var math_tan =  {
    "message0": Blockly.Msg["math_tan"],
    "args0": [
      {"type": "input_value", "name": "tan_value", "check": null}
    ],
  };
  Blockly.Blocks["math_tan"] = {
    init: function () {
      this.jsonInit(math_tan);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie la tangente de x (x en radians)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.tan"
      );
    },
  };

  // Math acos
  var math_acos =  {
    "message0": Blockly.Msg["math_acos"],
    "args0": [
      {"type": "input_value", "name": "acos_value", "check": null}
    ],
  };
  Blockly.Blocks["math_acos"] = {
    init: function () {
      this.jsonInit(math_acos);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie l'arc-cosinus de x (en radians)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.acos"
      );
    },
  };

  // Math asin
  var math_asin =  {
    "message0": Blockly.Msg["math_asin"],
    "args0": [
      {"type": "input_value", "name": "asin_value", "check": null}
    ],
  };
  Blockly.Blocks["math_asin"] = {
    init: function () {
      this.jsonInit(math_asin);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie l'arc-sinus de x (en radians)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.asin"
      );
    },
  };

  // Math atan
  var math_atan =  {
    "message0": Blockly.Msg["math_atan"],
    "args0": [
      {"type": "input_value", "name": "atan_value", "check": null}
    ],
  };
  Blockly.Blocks["math_atan"] = {
    init: function () {
      this.jsonInit(math_atan);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie l'arc-tangente de x (en radians)");
      this.setHelpUrl(
        " https://docs.python.org/fr/3/library/math.html#math.atan"
      );
    },
  };

  // Math exp
  var math_exp =  {
    "message0": Blockly.Msg["math_exp"],
    "args0": [
      {"type": "input_value", "name": "exp_value", "check": null}
    ],
  };
  Blockly.Blocks["math_exp"] = {
    init: function () {
      this.jsonInit(math_exp);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip(
        "Retourne e^x, où e est la constante d'Euler (2.718281...) et x est le nombre donné."
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.exp"
      );
    },
  };

  // Math log
  var math_log =  {
    "message0": Blockly.Msg["math_log"],
    "args0": [
      {"type": "input_value", "name": "log_value", "check": null}
    ],
  };
  Blockly.Blocks["math_log"] = {
    init: function () {
      this.jsonInit(math_log);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le logarithme naturel de x (en base e)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.log"
      );
    },
  };

  // Math log10
  var math_log10 =  {
    "message0": Blockly.Msg["math_log10"],
    "args0": [
      {"type": "input_value", "name": "log10_value", "check": null}
    ],
  };
  Blockly.Blocks["math_log10"] = {
    init: function () {
      this.jsonInit(math_log10);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le logarithme décimal de x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.log10"
      );
    },
  };

  // Math sqrt
  var math_sqrt =  {
    "message0": Blockly.Msg["math_sqrt"],
    "args0": [
      {"type": "input_value", "name": "sqrt_value", "check": null}
    ],
  };
  Blockly.Blocks["math_sqrt"] = {
    init: function () {
      this.jsonInit(math_sqrt);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie la racine carrée de x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.sqrt"
      );
    },
  };

  // Math pow
  var math_pow = {
    "message0": Blockly.Msg["math_pow"],
    "args0": [
      {"type": "input_value", "name": "pow_value", "check": null},
      {"type": "input_value", "name": "pow_value2", "check": null}
    ],
  };
  Blockly.Blocks["math_pow"] = {
    init: function () {
      this.jsonInit(math_pow);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie x à la puissance y");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.pow"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("pow_value").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">2</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
      var connection2 = this.getInput("pow_value2").connection;
      var otherConnection2 = connection2.targetConnection;
      var dom2 = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">3</field></shadow>' +
          "</xml>"
      ).children[0];
      connection2.setShadowDom(dom2);
      connection2.respawnShadow_();
      connection2.connect(otherConnection2);
    },
  };

  // Math ceil
  var math_ceil =  {
    "message0": Blockly.Msg["math_ceil"],
    "args0": [
      {"type": "input_value", "name": "ceil_value", "check": null}
    ],
  };
  Blockly.Blocks["math_ceil"] = {
    init: function () {
      this.jsonInit(math_ceil);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le plus petit entier supérieur ou égal à x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.ceil"
      );
    },
  };

  // Math floor
  var math_floor =  {
    "message0": Blockly.Msg["math_floor"],
    "args0": [
      {"type": "input_value", "name": "floor_value", "check": null}
    ],
  };
  Blockly.Blocks["math_floor"] = {
    init: function () {
      this.jsonInit(math_floor);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le plus grand entier inférieur ou égal à x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.floor"
      );
    },
  };

  // Math abs
  var math_abs =  {
    "message0": Blockly.Msg["math_abs"],
    "args0": [
      {"type": "input_value", "name": "abs_value", "check": null}
    ],
  };
  Blockly.Blocks["math_abs"] = {
    init: function () {
      this.jsonInit(math_abs);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie la valeur absolue de x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.fabs"
      );
    },
  };

  // Math round
  var math_round =  {
    "message0": Blockly.Msg["math_round"],
    "args0": [
      {"type": "input_value", "name": "round_value", "check": null}
    ],
  };
  Blockly.Blocks["math_round"] = {
    init: function () {
      this.jsonInit(math_round);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie la valeur arrondie de x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.round"
      );
    },
  };

  // Math trunc
  var math_trunc =  {
    "message0": Blockly.Msg["math_trunc"],
    "args0": [
      {"type": "input_value", "name": "trunc_value", "check": null}
    ],
  };
  Blockly.Blocks["math_trunc"] = {
    init: function () {
      this.jsonInit(math_trunc);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie la partie entière de x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.trunc"
      );
    },
  };

  // Math min
  var math_min =  {
    "message0": Blockly.Msg["math_min"],
    "args0": [
      {"type": "input_value", "name": "min_value", "check": null}
    ],
  };
  Blockly.Blocks["math_min"] = {
    init: function () {
      this.jsonInit(math_min);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip(
        "Renvoie le plus petit des arguments d'un itérable (chaîne de caractères, liste, tuple, etc.)"
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#min"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("min_value").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">3,9,6</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // Math max
  var math_max =  {
    "message0": Blockly.Msg["math_max"],
    "args0": [
      {"type": "input_value", "name": "max_value", "check": null}
    ],
  };
  Blockly.Blocks["math_max"] = {
    init: function () {
      this.jsonInit(math_max);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip(
        "Renvoie le plus grand des arguments d'un itérable (chaîne de caractères, liste, tuple, etc.)"
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#max"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("max_value").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">3,9,6</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };
}
