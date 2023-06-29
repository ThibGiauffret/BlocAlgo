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
      { type: "input_value", name: "min", value: 0, check: "Number" },
      { type: "input_value", name: "max", value: 100, check: "Number" },
    ],
  };
  Blockly.Blocks["random_randint"] = {
    init: function () {
      this.jsonInit(random_randint);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip(
        "Renvoie un entier aléatoire compris entre deux valeurs (incluses)"
      );
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.randint"
      );
      this.updateShadow();
    },
    updateShadow: function () {

      var connection = this.getInput("min").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="math_number"><field name="NUM">0</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      connection = this.getInput("max").connection;
      otherConnection = connection.targetConnection;
      dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="math_number"><field name="NUM">100</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    }
  };

  var random_choice = {
    message0: Blockly.Msg["random_choice"],
    args0: [{ type: "input_value", name: "list", check: null }],
  };
  Blockly.Blocks["random_choice"] = {
    init: function () {
      this.jsonInit(random_choice);
      this.setInputsInline(true);
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
          '  <shadow type="list_def"><field name="VALUE">1,2,3,4</field></shadow>' +
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
      this.setInputsInline(true);
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
          '  <shadow type="list_def"><field name="VALUE">1,2,3,4</field></shadow>' +
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
      { type:"input_value", name: "min", value: 0, check: "Number" },
      { type:"input_value", name: "max", value: 1, check: "Number" },
    ],
  };
  Blockly.Blocks["random_uniform"] = {
    init: function () {
      this.jsonInit(random_uniform);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip(
        "Renvoie un flottant aléatoire compris entre deux valeurs (incluses)"
      );
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.uniform"
      );
      this.updateShadow();
    },
    updateShadow: function () {

      var connection = this.getInput("min").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="math_number"><field name="NUM">0</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      connection = this.getInput("max").connection;
      otherConnection = connection.targetConnection;
      dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="math_number"><field name="NUM">1</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    }
  };

  var random_randrange = {
    message0: Blockly.Msg["random_randrange"],
    args0: [
      { type: "input_value", name: "start", value: 0, check: "Number" },
      { type: "input_value", name: "stop", check: "Number" },
      { type: "input_value", name: "step", value: 1, check: "Number" },
    ],
  };
  Blockly.Blocks["random_randrange"] = {
    init: function () {
      this.jsonInit(random_randrange);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip(
        "Renvoie un entier aléatoire compris entre une valeur de départ et d'arrivée (non incluse) avec un pas donné"
      );
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.randrange"
      );
      this.updateShadow();
    },
    updateShadow: function () {

      var connection = this.getInput("start").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="math_number"><field name="NUM">0</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      connection = this.getInput("step").connection;
      otherConnection = connection.targetConnection;
      dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="math_number"><field name="NUM">10</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      connection = this.getInput("stop").connection;
      otherConnection = connection.targetConnection;
      dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="math_number"><field name="NUM">100</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    }
  };

  var random_sample = {
    message0: Blockly.Msg["random_sample"],
    args0: [
      { type: "input_value", name: "list", check: null },
      { type: "input_value", name: "k", value: 1, check: "Number" },
    ],
  };
  Blockly.Blocks["random_sample"] = {
    init: function () {
      this.jsonInit(random_sample);
      this.setInputsInline(true);
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
          '  <shadow type="list_def"><field name="VALUE">1,2,3,4</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      connection = this.getInput("k").connection;
      otherConnection = connection.targetConnection;
      dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="math_number"><field name="NUM">2</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  var random_seed = {
    message0: Blockly.Msg["random_seed"],
    args0: [{ type: "input_value", name: "seed", check: "Number" }],
  };
  Blockly.Blocks["random_seed"] = {
    init: function () {
      this.jsonInit(random_seed);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip(
        "Initialise le générateur de nombres aléatoires avec une valeur donnée"
      );
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.seed"
      );
      this.updateShadow();
    },
    updateShadow: function () {
        
        var connection = this.getInput("seed").connection;
        var otherConnection = connection.targetConnection;
        var dom = Blockly.Xml.textToDom(
          "<xml>" +
            '  <shadow type="math_number"><field name="NUM">1234</field></shadow>' +
            "</xml>"
        ).children[0];
        connection.setShadowDom(dom);
        connection.respawnShadow_();
        connection.connect(otherConnection);
      }
  };
}
