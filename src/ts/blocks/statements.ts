import * as Blockly from "../../lib/blockly";

export function setStatements() {
  // Déclarations
  Blockly.Blocks["value"] = {
    init: function () {
      this.appendDummyInput().appendField(
        new Blockly.FieldTextInput("Texte libre"),
        "VALUE"
      );
      this.setOutput(true, "String");
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Un bloc de texte libre pour saisir une commande");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["value_number"] = {
    init: function () {
      this.appendDummyInput().appendField(
        new Blockly.FieldNumber(100),
        "VALUE"
      );
      this.setOutput(true, "Number");
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Un bloc de texte libre pour saisir une commande");
      this.setHelpUrl("");
    },
  };

  Blockly.Blocks["time_sleep"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("time.sleep (")
        .appendField(new Blockly.FieldNumber(0), "time_value")
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Pause le programme pendant un certain temps");
      this.setHelpUrl("https://docs.python.org/fr/3/library/time.html");
    },
  };

  Blockly.Blocks["print"] = {
    init: function () {
      this.appendDummyInput().appendField("print (");
      this.appendValueInput("PRINT").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Affiche une valeur dans la console");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#print"
      );
      this.updateShadow();
    },

    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("PRINT").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">"Coucou"</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  Blockly.Blocks["input"] = {
    init: function () {
      this.appendValueInput("input_var").setCheck(null);
      this.appendDummyInput()
        .appendField(' = input ("')
        .appendField(new Blockly.FieldTextInput(""), "input_message")
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Demande à l'utilisateur de saisir une valeur");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#input"
      );
    },
  };

  Blockly.Blocks["pass"] = {
    init: function () {
      this.appendDummyInput().appendField("pass");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Instruction vide");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/reference/simple_stmts.html#pass"
      );
    },
  };

  Blockly.Blocks["len"] = {
    init: function () {
      this.appendDummyInput().appendField("len (");
      this.appendValueInput("len_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip(
        "Renvoie la longueur d'une chaîne de caractères ou d'une liste"
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#len"
      );
    },
  };

  // int conversion block
  Blockly.Blocks["int"] = {
    init: function () {
      this.appendDummyInput().appendField("int (");
      this.appendValueInput("int_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Renvoie la valeur entière d'un nombre");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#int"
      );
    },
  };

  // float conversion block
  Blockly.Blocks["float"] = {
    init: function () {
      this.appendDummyInput().appendField("float (");
      this.appendValueInput("float_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Renvoie la valeur décimale d'un nombre");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#float"
      );
    },
  };

  // str conversion block
  Blockly.Blocks["str"] = {
    init: function () {
      this.appendDummyInput().appendField("str (");
      this.appendValueInput("str_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip(
        "Renvoie la valeur d'un nombre sous forme de chaîne de caractères"
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#str"
      );
    },
  };

  // list block
  Blockly.Blocks["list"] = {
    init: function () {
      this.appendDummyInput().appendField("list (");
      this.appendValueInput("list_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Renvoie une liste à partir de différentes valeurs");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#func-list"
      );
    },
  };

  // round conversion block
  Blockly.Blocks["round"] = {
    init: function () {
      this.appendDummyInput().appendField("round (");
      this.appendValueInput("round_value").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Renvoie la valeur arrondie d'un nombre");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#round"
      );
    },
  };

  // range block
  Blockly.Blocks["range"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("range (")
        .appendField(new Blockly.FieldNumber(0), "range_start")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(10), "range_end")
        .appendField(",")
        .appendField(new Blockly.FieldNumber(1), "range_step")
        .appendField(")");
      this.setOutput(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip(
        "Renvoie une liste de nombres à partir de 3 valeurs : le début, la fin et le pas"
      );
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#func-range"
      );
    },
  };
}
