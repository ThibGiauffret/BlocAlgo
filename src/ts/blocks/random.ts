import * as Blockly from "blockly";

export function setRandom() {
  Blockly.Blocks["random_random"] = {
    init: function () {
      this.appendDummyInput().appendField("random.random()");
      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip("Renvoie un nombre aléatoire compris entre 0 et 1");
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.random"
      );
    },
  };

  Blockly.Blocks["random_randint"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.randint (")
        .appendField(new Blockly.FieldTextInput("0"), "min")
        .appendField(" , ")
        .appendField(new Blockly.FieldTextInput("100"), "max")
        .appendField(")");

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

  Blockly.Blocks["random_choice"] = {
    init: function () {
      this.appendDummyInput().appendField("random.choice (");
      this.appendValueInput("list").setCheck(null);
      this.appendDummyInput().appendField(")");

      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip("Renvoie un élément aléatoire d'une liste");
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.choice"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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

  Blockly.Blocks["random_shuffle"] = {
    init: function () {
      this.appendDummyInput().appendField("random.shuffle (");
      this.appendValueInput("list").setCheck(null);
      this.appendDummyInput().appendField(")");

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
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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

  Blockly.Blocks["random_uniform"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.uniform (")
        .appendField(new Blockly.FieldTextInput("0"), "min")
        .appendField(" , ")
        .appendField(new Blockly.FieldTextInput("1"), "max")
        .appendField(")");

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

  Blockly.Blocks["random_randrange"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.randrange (")
        .appendField(new Blockly.FieldTextInput("0"), "min")
        .appendField(" , ")
        .appendField(new Blockly.FieldTextInput("100"), "max")
        .appendField(" , ")
        .appendField(new Blockly.FieldTextInput("1"), "step")
        .appendField(")");

      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip(
        "Renvoie un entier aléatoire compris entre une valeur de départ et d'arrivée (non incluse) avec un pas donné"
      );
    },
  };

  Blockly.Blocks["random_sample"] = {
    init: function () {
      this.appendDummyInput().appendField("random.sample (");
      this.appendValueInput("list").setCheck(null);
      this.appendDummyInput()
        .appendField(" , ")
        .appendField(new Blockly.FieldTextInput("1"), "k")
        .appendField(")");

      this.setOutput(true, null);
      this.setColour("%{BKY_RANDOM_COLOR}");
      this.setTooltip("Renvoie une liste de k éléments aléatoires d'une liste");
      this.setHelpUrl(
        "https://docs.python.org/3/library/random.html#random.sample"
      );
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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

  Blockly.Blocks["random_seed"] = {
    init: function () {
      this.appendDummyInput()
        .appendField("random.seed (")
        .appendField(new Blockly.FieldTextInput("0"), "seed")
        .appendField(")");

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
