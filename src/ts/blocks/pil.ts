import * as Blockly from "blockly";

export function setPIL() {
    
  // PIL create
  Blockly.Blocks["pil_open"] = {
    init: function () {
      this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("image"), "VAR1")
      .appendField(' = Image.open(');
      this.appendValueInput("path_value").setCheck(null);
        this.appendDummyInput().appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("%{BKY_PIL_COLOR}");
      this.setTooltip("Ouvrir une image (penser à importer le fichier avec le bouton \"+\")");
      this.setHelpUrl("");
      this.updateShadow();
    },
    updateShadow: function () {
        // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
        var connection = this.getInput("path_value").connection;
        var otherConnection = connection.targetConnection;
        var dom = Blockly.Xml.textToDom(
          '<xml><shadow type="value"><field name="VALUE">"mon_image.jpg"</field></shadow></xml>'
        ).children[0];
        connection.setShadowDom(dom);
        connection.respawnShadow_();
        connection.connect(otherConnection);
      },
  };

  // PIL show
    Blockly.Blocks["pil_show"] = {
        init: function () {
            this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("image"), "VAR1")
            .appendField(".show()");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Afficher une image");
            this.setHelpUrl("");
            }
        };

        // PIL size
    Blockly.Blocks["pil_size"] = {
        init: function () {
            this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("image"), "VAR1")
            .appendField(".size");
            this.setOutput(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Récupérer la taille d'une image sous la forme (largeur, hauteur)");
            this.setHelpUrl("");
            }
        };

    // PIL resize
    Blockly.Blocks["pil_resize"] = {
        init: function () {
            this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("nouvelle_image"), "VAR1")
            .appendField(" = ")
            .appendField(new Blockly.FieldVariable("image"), "VAR2")
            .appendField(".resize(");
            this.appendValueInput("dim_value").setCheck(null);
            this.appendDummyInput()
            .appendField(")");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Redimensionner une image (largeur, hauteur)");
            this.setHelpUrl("");
            this.updateShadow();
            },
            updateShadow: function () {
                // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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
    Blockly.Blocks["pil_rotate"] = {
        init: function () {
            this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("nouvelle_image"), "VAR1")
            .appendField(" = ")
            .appendField(new Blockly.FieldVariable("image"), "VAR2")
            .appendField(".rotate(");
            this.appendValueInput("angle_value").setCheck(null);
            this.appendDummyInput()
            .appendField(")");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Faire tourner une image (angle en degrés)");
            this.setHelpUrl("");
            this.updateShadow();
            },
            updateShadow: function () {
                // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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

    //     // PIL save
    // Blockly.Blocks["pil_save"] = {
    //     init: function () {
    //         this.appendDummyInput()
    //         .appendField(new Blockly.FieldVariable("image"), "VAR1")
    //         .appendField(".save(");
    //         this.appendValueInput("path_value").setCheck(null);
    //         this.appendDummyInput()
    //         .appendField(")");
    //         this.setPreviousStatement(true, null);
    //         this.setNextStatement(true, null);
    //         this.setColour("%{BKY_PIL_COLOR}");
    //         this.setTooltip("Sauvegarder une image");
    //         this.setHelpUrl("");
    //         }
    //     };

        // PIL crop
    Blockly.Blocks["pil_crop"] = {
        init: function () {
            this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("nouvelle_image"), "VAR1")
            .appendField(" = ")
            .appendField(new Blockly.FieldVariable("image"), "VAR2")
            .appendField(".crop(");
            this.appendValueInput("border_value").setCheck(null);
            this.appendDummyInput().appendField(")");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Rogner une image. Préciser les coordonnées (gauche, haut, droite, bas)");
            this.setHelpUrl("");
            this.updateShadow();
            },
            updateShadow: function () {
                // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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
    Blockly.Blocks["pil_getpixel"] = {
        init: function () {
            this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("image"), "VAR1")
            .appendField(".getpixel(");
            this.appendValueInput("pos_value").setCheck(null);
            this.appendDummyInput()
            .appendField(")");
            this.setOutput(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Obtenir la couleur d'un pixel (colonne, ligne)");
            this.setHelpUrl("");
            this.updateShadow();
            },
            updateShadow: function () {
                // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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
    Blockly.Blocks["pil_putpixel"] = {
        init: function () {
            this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("image"), "VAR1")
            .appendField(".putpixel(");
            this.appendValueInput("pos_value").setCheck(null);
            this.appendDummyInput()
            .appendField(",");
            this.appendValueInput("color_value").setCheck(null);
            this.appendDummyInput()
            .appendField(")");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour("%{BKY_PIL_COLOR}");
            this.setTooltip("Modifier la couleur d'un pixel");
            this.setHelpUrl("");
            this.updateShadow();
            },
            updateShadow: function () {
                // Exemple ici : https://groups.google.com/g/blockly/c/Cwe6TGH8vuA
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