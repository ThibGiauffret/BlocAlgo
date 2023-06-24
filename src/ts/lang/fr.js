/* eslint-disable */
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
      // AMD
      define([], factory);
    } else if (typeof exports === "object") {
      // Node.js
      module.exports = factory();
    } else {
      // Browser
      var messages = factory();
      for (var key in messages) {
        root.Blockly.Msg[key] = messages[key];
      }
    }
  })(this, function () {
    // This file was automatically generated.  Do not modify.
  
    "use strict";
  
    var Blockly = Blockly || { Msg: Object.create(null) };
  
    // Variables
    Blockly.Msg["VARIABLES_SET"] = "mettre la variable %1 à la valeur %2";
    Blockly.Msg["MATH_CHANGE_TITLE"] = "ajouter %2 à %1";

    // Functions
    Blockly.Msg["function_def"] = "definir %1 avec les arguments %2";
    Blockly.Msg["function_call"] = "appeler la fonction %1 avec les arguments %2";
    Blockly.Msg["function_return"] = "retourner %1";

    // Graph
    Blockly.Msg["matplotlib_plot"] = 'tracer %2 en fonction de %1 avec le nom %3, la couleur %4 et le marqueur %5';
    Blockly.Msg["matplotlib_plot2"] = 'tracer %2 en fonction de %1 avec les options %3';
    Blockly.Msg["matplotlib_show"] = 'afficher le graphique';
    Blockly.Msg["matplotlib_title"] = 'définir le titre du graphique à %1';
    Blockly.Msg["matplotlib_xlabel"] = 'définir le titre de l\'axe des abscisses à %1';
    Blockly.Msg["matplotlib_ylabel"] = 'définir le titre de l\'axe des ordonnées à %1';
    Blockly.Msg["matplotlib_legend"] = 'afficher la légende';
    Blockly.Msg["matplotlib_grid"] = 'afficher la grille';
    
    // Import
    Blockly.Msg["import_numpy"] = 'importer numpy sous le nom np';
    Blockly.Msg["import_turtle"] = 'importer toutes les fonctions de turtle';
    Blockly.Msg["import_matplotlib"] = 'importer matplotlib.pyplot sous le nom plt';
    Blockly.Msg["import_random"] = 'importer random';
    Blockly.Msg["import_time"] = 'importer time';
    Blockly.Msg["import_math"] = 'importer math';
    Blockly.Msg["import_pil"] = 'importer PIL.Image sous le nom Image';

    // Lists
    Blockly.Msg["list_create"] = 'créer la variable %1 et stocker la liste %2';
    Blockly.Msg["list_add"] = 'ajouter %2 à la liste %1';
    Blockly.Msg["list_get"] = 'récupérer le %2 ème élément de la liste %1';
    Blockly.Msg["list_set"] = 'modifier le %2 ème élément de la liste %1 par %3';

    // Conditions
    Blockly.Msg["condition_if"] = "si %1 alors";
    Blockly.Msg["condition_else"] = "sinon";
    Blockly.Msg["condition_elif"] = "sinon si %1";
    Blockly.Msg["condition_and"] = "et";
    Blockly.Msg["condition_or"] = "ou";
    Blockly.Msg["condition_not"] = "n'est pas %1";
  
    // Loops
    Blockly.Msg['boucle_for'] = "pour %1 allant de %2 à %3 avec un pas de %4";
    Blockly.Msg['boucle_for_in'] = "pour %1 dans %2";
    Blockly.Msg['boucle_while'] = "tant que %1";

    // Math
    Blockly.Msg["math_cos"] = "cosinus de la valeur %1";
    Blockly.Msg["math_sin"] = "sinus de la valeur %1";
    Blockly.Msg["math_tan"] = "tangente de la valeur %1";
    Blockly.Msg["math_acos"] = "arc cosinus de la valeur %1";
    Blockly.Msg["math_asin"] = "arc sinus de la valeur %1";
    Blockly.Msg["math_atan"] =  "arc tangente de la valeur %1";
    Blockly.Msg["math_exp"] =   "exponentielle de la valeur %1";
    Blockly.Msg["math_log"] =  "logarithme népérien de la valeur %1";
    Blockly.Msg["math_log10"] = "logarithme décimal de la valeur %1";
    Blockly.Msg["math_sqrt"] = "racine carrée de la valeur %1";
    Blockly.Msg["math_pow"] = "la valeur %1 à la puissance %2";
    Blockly.Msg["math_ceil"] = "arrondi supérieur de la valeur %1"
    Blockly.Msg["math_floor"] = "arrondi le plus proche de la valeur %1"
    Blockly.Msg["math_abs"] = "valeur absolue de la valeur %1"
    Blockly.Msg["math_round"] =   "arrondi de la valeur %1";
    Blockly.Msg["math_trunc"] =  "troncature de la valeur %1";
    Blockly.Msg["math_min"] = "valeur minimale de %1";
    Blockly.Msg["math_max"] = "valeur maximale de %1";
    Blockly.Msg["math_add"] = "addition";
    Blockly.Msg["math_sub"] = "soustaction";
    Blockly.Msg["math_mul"] = "multiplication";
    Blockly.Msg["math_div"] = "division";
    Blockly.Msg["math_mod"] = "reste de la division euclidienne";
    Blockly.Msg["math_pow2"] = "puissance";
    Blockly.Msg["math_floordiv"] = "quotient de la division euclidienne";
    Blockly.Msg["math_operator"] = "%2 de %1 par %3";

    // PIL
    Blockly.Msg["pil_open"] = 'ouvrir l\'image située à l\'adresse %2 et la stocker dans %1';
    Blockly.Msg["pil_show"] = 'afficher l\'image %1';
    Blockly.Msg["pil_size"] = 'obtenir la taille de l\'image %1';
    Blockly.Msg["pil_resize"] = 'redimensionner l\'image %2 à la taille %3 et la stocker dans %1';
    Blockly.Msg["pil_rotate"] = 'faire tourner l\'image %2 de %3 degrés et la stocker dans %1';
    Blockly.Msg["pil_crop"] = 'recadrer l\'image %2 en fonction des coordonnées %3 et la stocker dans %1';
    Blockly.Msg["pil_getpixel"] = 'obtenir la couleur du pixel de l\'image %1 aux coordonnées %2';
    Blockly.Msg["pil_putpixel"] = 'modifier la couleur du pixel de l\'image %1 aux coordonnées %2 par la couleur %3';
    
    // Random
    Blockly.Msg["random_random"] = "nombre aléatoire entre 0 et 1";
    Blockly.Msg["random_randint"] = "entier aléatoire entre %1 et %2";
    Blockly.Msg["random_choice"] = "nombre aléatoire dans la liste %1";
    Blockly.Msg["random_shuffle"] = "changer l'ordre des éléments de la liste %1";
    Blockly.Msg["random_uniform"] = "nombre aléatoire entre %1 et %2";
    Blockly.Msg["random_randrange"] = "entier aléatoire entre %1 et %2 avec un pas de %3";
    Blockly.Msg["random_sample"] = "séléctionner %1 éléments aléatoires dans la liste %2";
    Blockly.Msg["random_seed"] = "initialiser le générateur de nombres aléatoires avec la graine %1";

    // Statements
    Blockly.Msg["time_sleep"] = "attendre %1 secondes";
    Blockly.Msg["print"] = "afficher %1";
    Blockly.Msg["input"] = "damander à l'utilisateur de rentrer une valeur avec le message %2 et la stocker dans %1";
    Blockly.Msg["pass"] = "passer";
    Blockly.Msg["len"] = "longueur de %1";
    Blockly.Msg["int"] = "convertir %1 en entier";
    Blockly.Msg["float"] = "convertir %1 en flottant";
    Blockly.Msg["str"] = "convertir %1 en chaîne de caractères";
    Blockly.Msg["list"] = "convertir %1 en liste";
    Blockly.Msg["round"] = "arrondir %1";
    Blockly.Msg["range"] = "liste de %1 à %2 avec un pas de %3";

    // Turtle
    Blockly.Msg["turtle_init"] = "initialiser la tortue %1";
    Blockly.Msg["turtle_mainloop"] = "boucle principale de la tortue";
    Blockly.Msg["turtle_forward"] = "faire avancer la tortue %1 de %2";
    Blockly.Msg["turtle_backward"] = "faire reculer la tortue %1 de %2";
    Blockly.Msg["turtle_right"] = "faire tourner la tortue %1 de %2 degrés vers la droite";
    Blockly.Msg["turtle_left"] = "faire tourner la tortue %1 de %2 degrés vers la gauche";
    Blockly.Msg["turtle_penup"] = "relever le stylo de la tortue %1";
    Blockly.Msg["turtle_pendown"] = "abaisser le stylo de la tortue %1";
    Blockly.Msg["turtle_pencolor"] = "changer la couleur du stylo de la tortue %1 en %2";
    Blockly.Msg["turtle_speed"] = "changer la vitesse de la tortue %1 en %2";
    Blockly.Msg["turtle_width"] = "changer la largeur du stylo de la tortue %1 en %2";
    Blockly.Msg["turtle_goto"] = "déplacer la tortue %1 aux coordonnées x: %2 y: %3";
    Blockly.Msg["turtle_circle"] = "dessiner un cercle de rayon %2 avec la tortue %1 avec un angle de %3 degrés";
    return Blockly.Msg;
  });
  