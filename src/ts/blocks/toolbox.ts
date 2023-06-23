/**
 * The toolbox.ts file defines the custom toolbox used in the Blockly workspace. 
 * It exports a toolbox object that contains the categories and blocks in the toolbox. 
 * Each category is defined as a category object with a name, color, and contents array 
 * of blocks. Each block is defined as a block object with a type.
 */

let toolbox = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Importation",
      colour: "%{BKY_IMPORT_COLOR}",
      contents: [
        {
          kind: "block",
          type: "import_numpy",
        },
        {
          kind: "block",
          type: "import_matplotlib",
        },
        {
          kind: "block",
          type: "import_turtle",
        },
        {
          kind: "block",
          type: "import_time",
        },
        {
          kind: "block",
          type: "import_random",
        },
        {
          kind: "block",
          type: "import_math",
        },
        {
          kind: "block",
          type: "import_pil",
        }
      ],
    },
    {
      kind: "category",
      name: "Variables",
      colour: "%{BKY_VARIABLES_COLOR}",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "Listes",
      colour: "%{BKY_LISTS_COLOR}",
      contents: [
        {
          kind: "block",
          type: "list_create",
        },
        {
          kind: "block",
          type: "list_add",
        },
        {
          kind: "block",
          type: "list_set",
        },
        {
          kind: "block",
          type: "list_get",
        },
      ],
    },
    {
      kind: "category",
      name: "Déclarations",
      colour: "%{BKY_STATEMENTS_COLOR}",
      contents: [
        { kind: "block", type: "value" },
        { kind: "text", fields: { name: "TEXT", text: "abc" } },
        {
          kind: "block",
          type: "print",
        },
        {
          kind: "block",
          type: "input",
        },
        {
          kind: "block",
          type: "time_sleep",
        },
        {
          kind: "block",
          type: "pass",
        },
        {
          kind: "block",
          type: "len",
        },
        {
          kind: "block",
          type: "range",
        },
        {
          kind: "block",
          type: "int",
        },
        {
          kind: "block",
          type: "float",
        },
        {
          kind: "block",
          type: "str",
        },
        {
          kind: "block",
          type: "list",
        },
        {
          kind: "block",
          type: "round",
        },
      ],
    },
    {
      kind: "category",
      name: "Logique",
      colour: "%{BKY_LOGIC_COLOR}",
      contents: [
        {
          kind: "block",
          type: "condition_if",
        },
        {
          kind: "block",
          type: "condition_else",
        },
        {
          kind: "block",
          type: "condition_elif",
        },
        {
          kind: "block",
          type: "condition",
        },
        {
          kind: "block",
          type: "condition2",
        },
        {
          kind: "block",
          type: "condition_not",
        },
      ],
    },
    {
      kind: "category",
      name: "Boucles",
      colour: "%{BKY_LOOPS_COLOR}",
      contents: [
        {
          kind: "block",
          type: "boucle_for",
        },
        {
          kind: "block",
          type: "boucle_for_in",
        },
        {
          kind: "block",
          type: "boucle_while",
        },
      ],
    },
    {
      kind: "category",
      name: "Fonctions",
      colour: "%{BKY_FUNCTIONS_COLOR}",
      contents: [
        {
          kind: "block",
          type: "function_def",
        },
        {
          kind: "block",
          type: "function_call",
        },
        {
          kind: "block",
          type: "function_return",
        },
      ],
    },
    {
      kind: "category",
      name: "Maths",
      colour: "%{BKY_MATH_COLOR}",
      contents: [
        {
          kind: "block",
          type: "math_operator",
        },
        {
          kind: "block",
          type: "math_cos",
        },
        {
          kind: "block",
          type: "math_sin",
        },
        {
          kind: "block",
          type: "math_tan",
        },
        {
          kind: "block",
          type: "math_acos",
        },
        {
          kind: "block",
          type: "math_asin",
        },
        {
          kind: "block",
          type: "math_atan",
        },
        {
          kind: "block",
          type: "math_exp",
        },
        {
          kind: "block",
          type: "math_log",
        },
        {
          kind: "block",
          type: "math_log10",
        },
        {
          kind: "block",
          type: "math_sqrt",
        },
        {
          kind: "block",
          type: "math_pow",
        },
        {
          kind: "block",
          type: "math_ceil",
        },
        {
          kind: "block",
          type: "math_floor",
        },
        {
          kind: "block",
          type: "math_round",
        },
        {
          kind: "block",
          type: "math_trunc",
        },
        {
          kind: "block",
          type: "math_abs",
        },
        {
          kind: "block",
          type: "math_min",
        },
        {
          kind: "block",
          type: "math_max",
        },
      ],
    },
    {
      kind: "category",
      name: "Tortue",
      colour: "%{BKY_TURTLE_COLOR}",
      contents: [
        {
          kind: "block",
          type: "turtle_init",
        },
        {
          kind: "block",
          type: "turtle_mainloop",
        },
        {
          kind: "block",
          type: "turtle_forward",
        },
        {
          kind: "block",
          type: "turtle_backward",
        },
        {
          kind: "block",
          type: "turtle_right",
        },
        {
          kind: "block",
          type: "turtle_left",
        },

        {
          kind: "block",
          type: "turtle_penup",
        },
        {
          kind: "block",
          type: "turtle_pendown",
        },
        {
          kind: "block",
          type: "turtle_pencolor",
        },
        {
          kind: "block",
          type: "turtle_width",
        },
        {
          kind: "block",
          type: "turtle_speed",
        },
        {
          kind: "block",
          type: "turtle_goto",
        },
        {
          kind: "block",
          type: "turtle_circle",
        },
      ],
    },
    {
      kind: "category",
      name: "Graphiques",
      colour: "%{BKY_GRAPH_COLOR}",
      contents: [
        {
          kind: "block",
          type: "matplotlib_plot",
        },
        {
          kind: "block",
          type: "matplotlib_plot2",
        },
        {
          kind: "block",
          type: "matplotlib_show",
        },
        {
          kind: "block",
          type: "matplotlib_title",
        },
        {
          kind: "block",
          type: "matplotlib_xlabel",
        },
        {
          kind: "block",
          type: "matplotlib_ylabel",
        },
        {
          kind: "block",
          type: "matplotlib_grid",
        },
        {
          kind: "block",
          type: "matplotlib_legend",
        },
      ],
    },
    {
      kind: "category",
      name: "Aléatoire",
      colour: "%{BKY_RANDOM_COLOR}",
      contents: [
        {
          kind: "block",
          type: "random_random",
        },
        {
          kind: "block",
          type: "random_uniform",
        },
        {
          kind: "block",
          type: "random_randint",
        },
        {
          kind: "block",
          type: "random_randrange",
        },
        {
          kind: "block",
          type: "random_choice",
        },
        {
          kind: "block",
          type: "random_shuffle",
        },
        {
          kind: "block",
          type: "random_sample",
        },
        {
          kind: "block",
          type: "random_seed",
        },
      ],
    },
    {
      kind: "category",
      name: "Images",
      colour: "%{BKY_PIL_COLOR}",
      contents: [
        {
          kind: "block",
          type: "pil_open",
        },
        {
          kind: "block",
          type: "pil_show",
        },
        {
          kind: "block",
          type: "pil_size",
        },
        {
          kind: "block",
          type: "pil_resize",
        },
        {
          kind: "block",
          type: "pil_rotate",
        },
        {
          kind: "block",
          type: "pil_crop",
        },
        {
          kind: "block",
          type: "pil_getpixel",
        },
        {
          kind: "block",
          type: "pil_putpixel",
        },

      ]
    },
    
  ],
};

export { toolbox };