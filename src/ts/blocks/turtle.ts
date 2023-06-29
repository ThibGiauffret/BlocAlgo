import * as Blockly from "blockly";

export function setTurtle() {
  // Turtle create
  var turtle_init = {
    message0: Blockly.Msg["turtle_init"],
    args0: [{ type: "field_variable", name: "VAR", variable: "tortue" }],
  };
  Blockly.Blocks["turtle_init"] = {
    init: function () {
      this.jsonInit(turtle_init);
      this.setInputsInline(true);
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
      this.appendDummyInput().appendField(Blockly.Msg["turtle_mainloop"]);
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
  var turtle_forward = {
    message0: Blockly.Msg["turtle_forward"],
    args0: [
      { type: "field_variable", name: "VAR", variable: "tortue" },
      { type: "input_value", name: "distance", check: "Number" },
    ],
  };
  Blockly.Blocks["turtle_forward"] = {
    init: function () {
      this.jsonInit(turtle_forward);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Avancer la tortue d'une certaine distance (en pixels)");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
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
  var turtle_backward = {
    message0: Blockly.Msg["turtle_backward"],
    args0: [
      { type: "field_variable", name: "VAR", variable: "tortue" },
      { type: "input_value", name: "distance", check: "Number" },
    ],
  };
  Blockly.Blocks["turtle_backward"] = {
    init: function () {
      this.jsonInit(turtle_backward);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Reculer la tortue d'une certaine distance (en pixels)");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
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
  var turtle_right = {
    message0: Blockly.Msg["turtle_right"],
    args0: [
      { type: "field_variable", name: "VAR", variable: "tortue" },
      { type: "input_value", name: "angle", check: "Number" },
    ],
  };
  Blockly.Blocks["turtle_right"] = {
    init: function () {
      this.jsonInit(turtle_right);
      this.setInputsInline(true);
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
  var turtle_left = {
    message0: Blockly.Msg["turtle_left"],
    args0: [
      { type: "field_variable", name: "VAR", variable: "tortue" },
      { type: "input_value", name: "angle", check: "Number" },
    ],
  };
  Blockly.Blocks["turtle_left"] = {
    init: function () {
      this.jsonInit(turtle_left);
      this.setInputsInline(true);
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
  var turtle_penup = {
    message0: Blockly.Msg["turtle_penup"],
    args0: [{ type: "field_variable", name: "VAR", variable: "tortue" }],
  };
  Blockly.Blocks["turtle_penup"] = {
    init: function () {
      this.jsonInit(turtle_penup);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Lever le crayon");
      this.setHelpUrl("");
    },
  };

  // turtle pendown
  var turtle_pendown = {
    message0: Blockly.Msg["turtle_pendown"],
    args0: [{ type: "field_variable", name: "VAR", variable: "tortue" }],
  };
  Blockly.Blocks["turtle_pendown"] = {
    init: function () {
      this.jsonInit(turtle_pendown);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Baisser le crayon");
      this.setHelpUrl("");
    },
  };

  // turtle pencolor
  var turtle_pencolor = {
    message0: Blockly.Msg["turtle_pencolor"],
    args0: [
      { type: "field_variable", name: "VAR", variable: "tortue" },
      { type: "input_value", name: "color", check: "String" },
    ],
  };
  Blockly.Blocks["turtle_pencolor"] = {
    init: function () {
      this.jsonInit(turtle_pencolor);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Changer la couleur du crayon");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
      var connection = this.getInput("color").connection;
      var otherConnection = connection.targetConnection;
      var dom = Blockly.Xml.textToDom(
        "<xml>" +
          '  <shadow type="string"><field name="VALUE">red</field></shadow>' +
          "</xml>"
      ).children[0];
      connection.setShadowDom(dom);
      connection.respawnShadow_();
      connection.connect(otherConnection);
    },
  };

  // turtle speed
  var turtle_speed = {
    message0: Blockly.Msg["turtle_speed"],
    args0: [
      { type: "field_variable", name: "VAR", variable: "tortue" },
      { type: "input_value", name: "speed", check: "Number" },
    ],
  };
  Blockly.Blocks["turtle_speed"] = {
    init: function () {
      this.jsonInit(turtle_speed);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Changer la vitesse de la tortue (entre 0 et 10)");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
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
  var turtle_width = {
    message0: Blockly.Msg["turtle_width"],
    args0: [
      { type: "field_variable", name: "VAR", variable: "tortue" },
      { type: "input_value", name: "width", check: "Number" },
    ],
  };
  Blockly.Blocks["turtle_width"] = {
    init: function () {
      this.jsonInit(turtle_width);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Changer l'épaisseur du crayon");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
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
  var turtle_goto = {
    message0: Blockly.Msg["turtle_goto"],
    args0: [
      { type: "field_variable", name: "VAR", variable: "tortue" },
      { type: "input_value", name: "x", check: "Number" },
      { type: "input_value", name: "y", check: "Number" },
    ],
  };
  Blockly.Blocks["turtle_goto"] = {
    init: function () {
      this.jsonInit(turtle_goto);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Aller à un point");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
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
  var turtle_circle = {
    message0: Blockly.Msg["turtle_circle"],
    args0: [
      { type: "field_variable", name: "VAR", variable: "tortue" },  
      { type: "input_value", name: "radius", check: "Number" },
      { type: "input_value", name: "angle", check: "Number" },
    ],
  };
  Blockly.Blocks["turtle_circle"] = {
    init: function () {
      this.jsonInit(turtle_circle);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_TURTLE_COLOR}");
      this.setTooltip("Dessiner un cercle");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
      
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
