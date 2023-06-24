import * as Blockly from "blockly";

export function setTurtle() {
  // Turtle create
  Blockly.Blocks["turtle_init"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(" = Turtle()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Créer une tortue");
      this.setHelpUrl("");
    },
  };

  // turtle mainloop
  Blockly.Blocks["turtle_mainloop"] = {
    init: function () {
      this.appendDummyInput().appendField("mainloop()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip(
        "Boucle principale de turtle (à positionner en fin de programme)"
      );
      this.setHelpUrl("");
    },
  };

  //   turtle forward
  Blockly.Blocks["turtle_forward"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(".forward (");
      this.appendValueInput("distance").setCheck(null);
      this.appendDummyInput().appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Avancer la tortue d'une certaine distance (en pixels)");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("distance").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">100</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  //   turtle backward
  Blockly.Blocks["turtle_backward"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(".backward (");
      this.appendValueInput("distance").setCheck("Number");
      this.appendDummyInput().appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Reculer la tortue d'une certaine distance (en pixels)");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("distance").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">100</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // turtle right
  Blockly.Blocks["turtle_right"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(".right (");
      this.appendValueInput("angle").setCheck("Number");
      this.appendDummyInput().appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip(
        "Tourner la tortue vers la droite d'un certain angle (en degrés)"
      );
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("angle").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">100</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // turtle left
  Blockly.Blocks["turtle_left"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(".left (");
      this.appendValueInput("angle").setCheck("Number");
      this.appendDummyInput().appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip(
        "Tourner la tortue vers la gauche d'un certain angle (en degrés)"
      );
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("angle").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">100</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // turtle penup
  Blockly.Blocks["turtle_penup"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(".penup()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Lever le crayon");
      this.setHelpUrl("");
    },
  };

  // turtle pendown
  Blockly.Blocks["turtle_pendown"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(".pendown()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Baisser le crayon");
      this.setHelpUrl("");
    },
  };

  // turtle pencolor
  Blockly.Blocks["turtle_pencolor"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(".pencolor (");
      this.appendValueInput("color").setCheck("String");
      this.appendDummyInput().appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Changer la couleur du crayon");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("color").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value"><field name="VALUE">"red"</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // turtle speed

  Blockly.Blocks["turtle_speed"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(".speed (");
      this.appendValueInput("speed").setCheck("Number");
      this.appendDummyInput().appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Changer la vitesse de la tortue (entre 0 et 10)");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("speed").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">10</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // turtle width
  Blockly.Blocks["turtle_width"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(".width (");
      this.appendValueInput("width").setCheck("Number");
      this.appendDummyInput().appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Changer l'épaisseur du crayon");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("width").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">10</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // turtle goto
  Blockly.Blocks["turtle_goto"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(".goto (");
      this.appendValueInput("x").setCheck("Number");
      this.appendDummyInput().appendField(",");
      this.appendValueInput("y").setCheck("Number");
      this.appendDummyInput().appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Aller à un point");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("x").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">10</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      connection = this.getInput("y").connection;
      otherConnection = connection.targetConnection;
      dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">10</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // turtle circle
  Blockly.Blocks["turtle_circle"] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("tortue"), "VAR")
        .appendField(".circle (");
      this.appendValueInput("radius").setCheck("Number");
      this.appendDummyInput().appendField(",");
      this.appendValueInput("angle").setCheck("Number");
      this.appendDummyInput().appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Dessiner un cercle");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
      var connection = this.getInput("radius").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">10</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);

      connection = this.getInput("angle").connection;
      otherConnection = connection.targetConnection;
      dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="value_number"><field name="VALUE">360</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };
}
