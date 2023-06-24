import * as Blockly from "blockly";

export function setRandom() {
  Blockly.Blocks["random_random"] = {
    init: function () {
      this.appendDummyInput().appendField(Blockly.Msg["random_random"]);
      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip("Renvoie un nombre aléatoire compris entre 0 et 1");
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.random"
      );
    },
  };

  var random_randint = {
    message0: Blockly.Msg["random_randint"],
    args0: [
      { type: "field_number", name: "min", value: 0, check: "Number" },
      { type: "field_number", name: "max", value: 100, check: "Number" },
    ],
  };
  Blockly.Blocks["random_randint"] = {
    init: function () {
      this.jsonInit(random_randint);
      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip(
        "Renvoie un entier aléatoire compris entre deux valeurs (incluses)"
      );
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.randint"
      );
    },
  };

  var random_choice = {
    message0: Blockly.Msg["random_choice"],
    args0: [{ type: "input_value", name: "list", check: null }],
  };
  Blockly.Blocks["random_choice"] = {
    init: function () {
      this.jsonInit(random_choice);
      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip("Renvoie un élément aléatoire d'une liste");
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.choice"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("list").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">[1,2,3,4]</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  var random_shuffle = {
    message0: Blockly.Msg["random_shuffle"],
    args0: [{ type: "input_value", name: "list", check: null }],
  };
  Blockly.Blocks["random_shuffle"] = {
    init: function () {
      this.jsonInit(random_shuffle);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip("Mélange une liste");
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.shuffle"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("list").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">[1,2,3,4]</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  var random_uniform = {
    message0: Blockly.Msg["random_uniform"],
    args0: [
      { type: "field_number", name: "min", value: 0, check: "Number" },
      { type: "field_number", name: "max", value: 1, check: "Number" },
    ],
  };
  Blockly.Blocks["random_uniform"] = {
    init: function () {
      this.jsonInit(random_uniform);
      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip(
        "Renvoie un flottant aléatoire compris entre deux valeurs (incluses)"
      );
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.uniform"
      );
    },
  };

  var random_randrange = {
    message0: Blockly.Msg["random_randrange"],
    args0: [
      { type: "field_number", name: "min", value: 0, check: "Number" },
      { type: "field_number", name: "max", value: 100, check: "Number" },
      { type: "field_number", name: "step", value: 1, check: "Number" },
    ],
  };
  Blockly.Blocks["random_randrange"] = {
    init: function () {
      this.jsonInit(random_randrange);
      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip(
        "Renvoie un entier aléatoire compris entre une valeur de départ et d'arrivée (non incluse) avec un pas donné"
      );
    },
  };

  var random_sample = {
    message0: Blockly.Msg["random_sample"],
    args0: [
      { type: "input_value", name: "list", check: null },
      { type: "field_number", name: "k", value: 1, check: "Number" },
    ],
  };
  Blockly.Blocks["random_sample"] = {
    init: function () {
      this.jsonInit(random_sample);
      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip("Renvoie une liste de k éléments aléatoires d'une liste");
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.sample"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("list").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">[1,2,3,4]</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  var random_seed = {
    message0: Blockly.Msg["random_seed"],
    args0: [{ type: "field_number", name: "seed", value: 0, check: "Number" }],
  };
  Blockly.Blocks["random_seed"] = {
    init: function () {
      this.jsonInit(random_seed);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip(
        "Initialise le générateur de nombres aléatoires avec une valeur donnée"
      );
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.seed"
      );
    },
  };
}
