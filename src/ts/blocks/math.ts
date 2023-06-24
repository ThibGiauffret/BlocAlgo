import * as Blockly from "blockly";

export function setMath() {
  // Math operator block (same as condition)
  Blockly.Blocks["math_operator"] = {
    init: function () {
      this.appendValueInput("first_value").setCheck(null);
      this.appendDummyInput().appendField(
        new Blockly.FieldDropdown([
          ["+", "+"],
          ["-", "-"],
          ["*", "*"],
          ["/", "/"],
          ["//", "//"],
          ["**", "**"],
          ["%", "%"],
        ]),
        "operator"
      );
      this.appendValueInput("second_value").setCheck(null);
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Opérateurs mathématique");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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
  Blockly.Blocks["math_cos"] = {
    init: function () {
      this.appendDummyInput().appendField("math.cos (");
      this.appendValueInput("cos_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le cosinus de x (x en radians)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.cos"
      );
    },
  };

  // Math sin
  Blockly.Blocks["math_sin"] = {
    init: function () {
      this.appendDummyInput().appendField("math.sin (");
      this.appendValueInput("sin_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le sinus de x (x en radians)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.sin"
      );
    },
  };

  // Math tan
  Blockly.Blocks["math_tan"] = {
    init: function () {
      this.appendDummyInput().appendField("math.tan (");
      this.appendValueInput("tan_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie la tangente de x (x en radians)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.tan"
      );
    },
  };

  // Math acos
  Blockly.Blocks["math_acos"] = {
    init: function () {
      this.appendDummyInput().appendField("math.acos (");
      this.appendValueInput("acos_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie l'arc-cosinus de x (en radians)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.acos"
      );
    },
  };

  // Math asin
  Blockly.Blocks["math_asin"] = {
    init: function () {
      this.appendDummyInput().appendField("math.asin (");
      this.appendValueInput("asin_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie l'arc-sinus de x (en radians)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.asin"
      );
    },
  };

  // Math atan
  Blockly.Blocks["math_atan"] = {
    init: function () {
      this.appendDummyInput().appendField("math.atan (");
      this.appendValueInput("atan_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie l'arc-tangente de x (en radians)");
      this.setHelpUrl(
        " https://docs.python.org/fr/3/library/math.html#math.atan"
      );
    },
  };

  // Math exp
  Blockly.Blocks["math_exp"] = {
    init: function () {
      this.appendDummyInput().appendField("math.exp (");
      this.appendValueInput("exp_value").setCheck(null);
      this.appendDummyInput().appendField(")");
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
  Blockly.Blocks["math_log"] = {
    init: function () {
      this.appendDummyInput().appendField("math.log (");
      this.appendValueInput("log_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le logarithme naturel de x (en base e)");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.log"
      );
    },
  };

  // Math log10
  Blockly.Blocks["math_log10"] = {
    init: function () {
      this.appendDummyInput().appendField("math.log10 (");
      this.appendValueInput("log10_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le logarithme décimal de x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.log10"
      );
    },
  };

  // Math sqrt
  Blockly.Blocks["math_sqrt"] = {
    init: function () {
      this.appendDummyInput().appendField("math.sqrt (");
      this.appendValueInput("sqrt_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie la racine carrée de x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.sqrt"
      );
    },
  };

  // Math pow
  Blockly.Blocks["math_pow"] = {
    init: function () {
      this.appendDummyInput().appendField("math.pow (");
      this.appendValueInput("pow_value").setCheck(null);
      this.appendDummyInput().appendField(",");
      this.appendValueInput("pow_value2").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie x à la puissance y");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.pow"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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
  Blockly.Blocks["math_ceil"] = {
    init: function () {
      this.appendDummyInput().appendField("math.ceil (");
      this.appendValueInput("ceil_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le plus petit entier supérieur ou égal à x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.ceil"
      );
    },
  };

  // Math floor
  Blockly.Blocks["math_floor"] = {
    init: function () {
      this.appendDummyInput().appendField("math.floor (");
      this.appendValueInput("floor_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie le plus grand entier inférieur ou égal à x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.floor"
      );
    },
  };

  // Math abs
  Blockly.Blocks["math_abs"] = {
    init: function () {
      this.appendDummyInput().appendField("math.fabs (");
      this.appendValueInput("abs_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie la valeur absolue de x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.fabs"
      );
    },
  };

  // Math round
  Blockly.Blocks["math_round"] = {
    init: function () {
      this.appendDummyInput().appendField("math.round (");
      this.appendValueInput("round_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie la valeur arrondie de x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.round"
      );
    },
  };

  // Math trunc
  Blockly.Blocks["math_trunc"] = {
    init: function () {
      this.appendDummyInput().appendField("math.trunc (");
      this.appendValueInput("trunc_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_MATH_COLOR}");
      this.setTooltip("Renvoie la partie entière de x");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/math.html#math.trunc"
      );
    },
  };

  // Math min
  Blockly.Blocks["math_min"] = {
    init: function () {
      this.appendDummyInput().appendField("min (");
      this.appendValueInput("min_value").setCheck(null);
      this.appendDummyInput().appendField(")");
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
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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
  Blockly.Blocks["math_max"] = {
    init: function () {
      this.appendDummyInput().appendField("max (");
      this.appendValueInput("max_value").setCheck(null);
      this.appendDummyInput().appendField(")");
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
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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
