import * as Blockly from "blockly";

export function setPIL() {
    
  // PIL create
  var pil_open = {
    "message0": Blockly.Msg['pil_open'],
    "args0": [
      {"type": "field_variable", "name": "VAR1", "variable": "image", "variableTypes": [""]},
      {"type": "input_value", "name": "path_value", "check": null},
    ]
  };
  Blockly.Blocks["pil_open"] = {
    init: function () {
      this.jsonInit(pil_open);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_PIL_COLOR}");
      this.setTooltip("Ouvrir une image (penser à importer le fichier avec le bouton \"+\")");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
        
        var connection = this.getInput("path_value").connection;
        var otherConnection = connection.targetConnection;
        var dom = Blockly.Xml.textToDom(
          '<xml><shadow type="string"><field name="VALUE">mon_image.jpg</field></shadow></xml>'
        ).children[0];
        connection.setShadowDom(dom);
        connection.respawnShadow_();
        connection.connect(otherConnection);
      },
  };

  // PIL show
  var pil_show = {
    "message0": Blockly.Msg['pil_show'],
    "args0": [
      {"type": "field_variable", "name": "VAR1", "variable": "image", "variableTypes": [""]},
    ]
  };
    Blockly.Blocks["pil_show"] = {
        init: function () {
            this.jsonInit(pil_show);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Afficher une image");
            this.setHelpUrl("");
            }
        };

        // PIL size
        var pil_size = {
            "message0": Blockly.Msg['pil_size'],
            "args0": [
              {"type": "field_variable", "name": "VAR1", "variable": "image", "variableTypes": [""]},
            ],
        }
    Blockly.Blocks["pil_size"] = {
        init: function () {
            this.jsonInit(pil_size);
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Récupérer la taille d'une image sous la forme (largeur, hauteur)");
            this.setHelpUrl("");
            }
        };

    // PIL resize
    var pil_resize = {
        "message0": Blockly.Msg['pil_resize'],
        "args0": [
          {"type": "field_variable", "name": "VAR1", "variable": "nouvelle_image", "variableTypes": [""]},
          {"type": "field_variable", "name": "VAR2", "variable": "image", "variableTypes": [""]},
          {"type": "input_value", "name": "dim_value", "check": null},
        ]
      };
    Blockly.Blocks["pil_resize"] = {
        init: function () {
            this.jsonInit(pil_resize);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Redimensionner une image (largeur, hauteur)");
            this.setHelpUrl("");
            this.updateShadow();
            },
            updateShadow: function () {
                
                var connection = this.getInput("dim_value").connection;
                var otherConnection = connection.targetConnection;
                var dom = Blockly.Xml.textToDom(
                  "<xml>" +
                    '  <shadow type="value"><field name="VALUE">(100,100)</field></shadow>' +
                    "</xml>"
                ).children[0];
                connection.setShadowDom(dom);
                connection.respawnShadow_();
                connection.connect(otherConnection);
              },

        };

    // PIL rotate
    var pil_rotate = {
        "message0": Blockly.Msg['pil_rotate'],
        "args0": [
          {"type": "field_variable", "name": "VAR1", "variable": "nouvelle_image", "variableTypes": [""]},
          {"type": "field_variable", "name": "VAR2", "variable": "image", "variableTypes": [""]},
          {"type": "input_value", "name": "angle_value", "check": null},
        ]
      };
    Blockly.Blocks["pil_rotate"] = {
        init: function () {
            this.jsonInit(pil_rotate);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Faire tourner une image (angle en degrés)");
            this.setHelpUrl("");
            this.updateShadow();
            },
            updateShadow: function () {
                
                var connection = this.getInput("angle_value").connection;
                var otherConnection = connection.targetConnection;
                var dom = Blockly.Xml.textToDom(
                  "<xml>" +
                    '  <shadow type="value"><field name="VALUE">45</field></shadow>' +
                    "</xml>"
                ).children[0];
                connection.setShadowDom(dom);
                connection.respawnShadow_();
                connection.connect(otherConnection);
              }
        };

        // PIL crop
    var pil_crop = {
        "message0": Blockly.Msg['pil_crop'],
        "args0": [
          {"type": "field_variable", "name": "VAR1", "variable": "nouvelle_image", "variableTypes": [""]},
          {"type": "field_variable", "name": "VAR2", "variable": "image", "variableTypes": [""]},
          {"type": "input_value", "name": "border_value", "check": null},
        ]
      };
    Blockly.Blocks["pil_crop"] = {
        init: function () {
            this.jsonInit(pil_crop);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Rogner une image. Préciser les coordonnées (gauche, haut, droite, bas)");
            this.setHelpUrl("");
            this.updateShadow();
            },
            updateShadow: function () {
                
                var connection = this.getInput("border_value").connection;
                var otherConnection = connection.targetConnection;
                var dom = Blockly.Xml.textToDom(
                  "<xml>" +
                    '  <shadow type="value"><field name="VALUE">(10,10,10,10)</field></shadow>' +
                    "</xml>"
                ).children[0];
                connection.setShadowDom(dom);
                connection.respawnShadow_();
                connection.connect(otherConnection);

              }
        };

    // PIL getpixel
    var pil_getpixel = {
        "message0": Blockly.Msg['pil_getpixel'],
        "args0": [
          {"type": "field_variable", "name": "VAR1", "variable": "image", "variableTypes": [""]},
          {"type": "input_value", "name": "pos_value", "check": null},
        ],
      }
    Blockly.Blocks["pil_getpixel"] = {
        init: function () {
            this.jsonInit(pil_getpixel);
            this.setInputsInline(true);
            this.setOutput(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Obtenir la couleur d'un pixel (colonne, ligne)");
            this.setHelpUrl("");
            this.updateShadow();
            },
            updateShadow: function () {
                
                var connection = this.getInput("pos_value").connection;
                var otherConnection = connection.targetConnection;
                var dom = Blockly.Xml.textToDom(
                  "<xml>" +
                    '  <shadow type="value"><field name="VALUE">(0,0)</field></shadow>' +
                    "</xml>"
                ).children[0];
                connection.setShadowDom(dom);
                connection.respawnShadow_();
                connection.connect(otherConnection);
              }
        };

        // PIL putpixel
    var pil_putpixel = {
        "message0": Blockly.Msg['pil_putpixel'],
        "args0": [
          {"type": "field_variable", "name": "VAR1", "variable": "image", "variableTypes": [""]},
          {"type": "input_value", "name": "pos_value", "check": null},
          {"type": "input_value", "name": "color_value", "check": null},
        ],
      }
    Blockly.Blocks["pil_putpixel"] = {
        init: function () {
            this.jsonInit(pil_putpixel);
            this.setInputsInline(true);
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Modifier la couleur d'un pixel");
            this.setHelpUrl("");
            this.updateShadow();
            },
            updateShadow: function () {
                
                var connection = this.getInput("pos_value").connection;
                var otherConnection = connection.targetConnection;
                var dom = Blockly.Xml.textToDom(
                  "<xml>" +
                    '  <shadow type="value"><field name="VALUE">(0,0)</field></shadow>' +
                    "</xml>"
                ).children[0];
                connection.setShadowDom(dom);
                connection.respawnShadow_();
                connection.connect(otherConnection);


                var connection = this.getInput("color_value").connection;
                var otherConnection = connection.targetConnection;
                var dom = Blockly.Xml.textToDom(
                  "<xml>" +
                    '  <shadow type="value"><field name="VALUE">(120,200,55)</field></shadow>' +
                    "</xml>"
                ).children[0];
                connection.setShadowDom(dom);
                connection.respawnShadow_();
                connection.connect(otherConnection);
              }
        };

        

}