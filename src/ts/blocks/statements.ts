import * as Blockly from "blockly";

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

  var time_sleep = {
    message0: Blockly.Msg["time_sleep"],
    args0: [{ type: "field_number", name: "time_value", value: 0 }],
  };
  Blockly.Blocks["time_sleep"] = {
    init: function () {
      this.jsonInit(time_sleep);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Pause le programme pendant un certain temps");
      this.setHelpUrl("https://docs.python.org/fr/3/library/time.html");
    },
  };

  var print = {
    message0: Blockly.Msg["print"],
    args0: [{ type: "input_value", name: "PRINT", check: null }],
  };
  Blockly.Blocks["print"] = {
    init: function () {
      this.jsonInit(print);
      this.setInputsInline(true);
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

  var input = {
    message0: Blockly.Msg["input"],
    args0: [
      { type: "input_value", name: "input_var", check: null },
      { type: "field_input", name: "input_message", text: "" },
    ],
  };
  Blockly.Blocks["input"] = {
    init: function () {
      this.jsonInit(input);
      this.setInputsInline(true);
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
      this.appendDummyInput().appendField(Blockly.Msg["pass"]);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Instruction vide");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/reference/simple_stmts.html#pass"
      );
    },
  };

  var len = {
    message0: Blockly.Msg["len"],
    args0: [{ type: "input_value", name: "len_value", check: null }],
  };
  Blockly.Blocks["len"] = {
    init: function () {
      this.jsonInit(len);
      this.setInputsInline(true);
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
  var int = {
    message0: Blockly.Msg["int"],
    args0: [{ type: "input_value", name: "int_value", check: null }],
  };
  Blockly.Blocks["int"] = {
    init: function () {
      this.jsonInit(int);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Renvoie la valeur entière d'un nombre");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#int"
      );
    },
  };

  // float conversion block
  var float = {
    message0: Blockly.Msg["float"],
    args0: [{ type: "input_value", name: "float_value", check: null }],
  };
  Blockly.Blocks["float"] = {
    init: function () {
      this.jsonInit(float);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Renvoie la valeur décimale d'un nombre");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#float"
      );
    },
  };

  // str conversion block
  var str = {
    message0: Blockly.Msg["str"],
    args0: [{ type: "input_value", name: "str_value", check: null }],
  };
  Blockly.Blocks["str"] = {
    init: function () {
      this.jsonInit(str);
      this.setInputsInline(true);
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
  var list = {
    message0: Blockly.Msg["list"],
    args0: [{ type: "input_value", name: "list_value", check: null }],
  };
  Blockly.Blocks["list"] = {
    init: function () {
      this.jsonInit(list);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Renvoie une liste à partir de différentes valeurs");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#func-list"
      );
    },
  };

  // round conversion block
  var round = {
    message0: Blockly.Msg["round"],
    args0: [{ type: "input_value", name: "round_value", check: null }],
  };
  Blockly.Blocks["round"] = {
    init: function () {
      this.jsonInit(round);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_STATEMENTS_COLOR}");
      this.setTooltip("Renvoie la valeur arrondie d'un nombre");
      this.setHelpUrl(
        "https://docs.python.org/fr/3/library/functions.html#round"
      );
    },
  };

  // range block
  var range = {
    message0: Blockly.Msg["range"],
    args0: [
      { type: "field_input", name: "range_start", check: "Number" },
      { type: "field_input", name: "range_end", check: "Number" },
      { type: "field_input", name: "range_step", check: "Number" },
    ],
  };
  Blockly.Blocks["range"] = {
    init: function () {
      this.jsonInit(range);
      this.setInputsInline(true);
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
