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
          type: "factory_base",
        },
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

// <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">

// <category name="Bibliothèques" colour="#42af55">
// <block type="import_numpy"></block>
// <block type="import_matplotlib"></block>
// <block type="import_turtle"></block>
// <block type="import_time"></block>
// <block type="import_random"></block>
// <block type="import_math"></block>
// </category>

// <category name="Variables" colour="#a55b80" custom="VARIABLE"></category>

// <category name="Déclarations" colour="#29F916">
// <block type="print"></block>
// <block type="input_custom"></block>

// <block type="time_sleep"></block>
// <block type="function_call"></block>
// <block type="pass"></block>
// <block type="len"></block>
// <block type="range"></block>
// <block type="int"></block>
// <block type="float"></block>
// <block type="str"></block>
// <block type="list"></block>
// <block type="round"></block>

// </category>

// <category name="Logique" colour="%{BKY_LOGIC_COLOR}">
// <block type="condition_if"></block>
// <block type="condition_else"></block>
// <block type="condition_elif"></block>
// <block type="condition"></block>
// </category>

// <category name="Boucles" colour="%{BKY_LOOPS_COLOR}">
// <block type="boucle_for"></block>
// <block type="boucle_for_in"></block>
// <block type="boucle_while"></block>

// </category>

// <category name="Maths" colour="%{BKY_LISTS_COLOR}">
// <block type="math_number">
// <field name="NUM">0</field>
// </block>
// <block type="math_arithmetic">
// <field name="OP">ADD</field>
// <value name="A">
// <shadow type="math_number">
// <field name="NUM">1</field>
// </shadow>
// </value>
// <value name="B">
// <shadow type="math_number">
// <field name="NUM">1</field>
// </shadow>
// </value>
// </block>
// <block type="math_single">
// <field name="OP">ROOT</field>
// <value name="NUM">
// <shadow type="math_number">
// <field name="NUM">9</field>
// </shadow>
// </value>
// </block>
// <block type="math_trig">
// <field name="OP">SIN</field>
// <value name="NUM">
// <shadow type="math_number">
// <field name="NUM">45</field>
// </shadow>
// </value>
// </block>
// <block type="math_constant">
// <field name="CONSTANT">PI</field>
// </block>
// <block type="math_number_property">
// <mutation divisor_input="false"></mutation>
// <field name="PROPERTY">EVEN</field>
// <value name="NUMBER_TO_CHECK">
// <shadow type="math_number">
// <field name="NUM">0</field>
// </shadow>
// </value>
// </block>
// <block type="math_round">
// <field name="OP">ROUND</field>
// <value name="NUM">
// <shadow type="math_number">
// <field name="NUM">3.1</field>
// </shadow>
// </value>
// </block>
// <block type="math_on_list">
// <mutation op="SUM"></mutation>
// <field name="OP">SUM</field>
// </block>
// <block type="math_modulo">
// <value name="DIVIDEND">
// <shadow type="math_number">
// <field name="NUM">64</field>
// </shadow>
// </value>
// <value name="DIVISOR">
// <shadow type="math_number">
// <field name="NUM">10</field>
// </shadow>
// </value>
// </block>
// <block type="math_constrain">
// <value name="VALUE">
// <shadow type="math_number">
// <field name="NUM">50</field>
// </shadow>
// </value>
// <value name="LOW">
// <shadow type="math_number">
// <field name="NUM">1</field>
// </shadow>
// </value>
// <value name="HIGH">
// <shadow type="math_number">
// <field name="NUM">100</field>
// </shadow>
// </value>
// </block>
// <block type="math_random_int">
// <value name="FROM">
// <shadow type="math_number">
// <field name="NUM">1</field>
// </shadow>
// </value>
// <value name="TO">
// <shadow type="math_number">
// <field name="NUM">100</field>
// </shadow>
// </value>
// </block>
// <block type="math_random_float"></block>
// </category>

// <category name="Texte" colour="#5ba58c">
// <block type="text">
// <field name="TEXT"></field>
// </block>
// <block type="text_join">
// <mutation items="2"></mutation>
// </block>
// <block type="text_append">
// <field name="VAR" id="XqImh?@4YMl4wOmxsLXh">item</field>
// <value name="TEXT">
// <shadow type="text">
// <field name="TEXT"></field>
// </shadow>
// </value>
// </block>
// <block type="text_length">
// <value name="VALUE">
// <shadow type="text">
// <field name="TEXT">abc</field>
// </shadow>
// </value>
// </block>
// <block type="text_isEmpty">
// <value name="VALUE">
// <shadow type="text">
// <field name="TEXT"></field>
// </shadow>
// </value>
// </block>
// <block type="text_indexOf">
// <field name="END">FIRST</field>
// <value name="VALUE">
// <block type="variables_get">
// <field name="VAR" id="O^Q*9OWfYV5!aiHhiQ+p">text</field>
// </block>
// </value>
// <value name="FIND">
// <shadow type="text">
// <field name="TEXT">abc</field>
// </shadow>
// </value>
// </block>
// <block type="text_charAt">
// <mutation at="true"></mutation>
// <field name="WHERE">FROM_START</field>
// <value name="VALUE">
// <block type="variables_get">
// <field name="VAR" id="O^Q*9OWfYV5!aiHhiQ+p">text</field>
// </block>
// </value>
// </block>
// <block type="text_getSubstring">
// <mutation at1="true" at2="true"></mutation>
// <field name="WHERE1">FROM_START</field>
// <field name="WHERE2">FROM_START</field>
// <value name="STRING">
// <block type="variables_get">
// <field name="VAR" id="O^Q*9OWfYV5!aiHhiQ+p">text</field>
// </block>
// </value>
// </block>
// <block type="text_changeCase">
// <field name="CASE">UPPERCASE</field>
// <value name="TEXT">
// <shadow type="text">
// <field name="TEXT">abc</field>
// </shadow>
// </value>
// </block>
// <block type="text_trim">
// <field name="MODE">BOTH</field>
// <value name="TEXT">
// <shadow type="text">
// <field name="TEXT">abc</field>
// </shadow>
// </value>
// </block>
// <block type="text_print">
// <value name="TEXT">
// <shadow type="text">
// <field name="TEXT">abc</field>
// </shadow>
// </value>
// </block>
// <block type="text_prompt_ext">
// <mutation type="TEXT"></mutation>
// <field name="TYPE">TEXT</field>
// <value name="TEXT">
// <shadow type="text">
// <field name="TEXT">abc</field>
// </shadow>
// </value>
// </block>
// </category>

// <category name="Liste" colour="#745ba5">
// <block type="lists_create_with">
// <mutation items="0"></mutation>
// </block>
// <block type="lists_create_with">
// <mutation items="3"></mutation>
// </block>
// <block type="lists_repeat">
// <value name="NUM">
// <shadow type="math_number">
// <field name="NUM">5</field>
// </shadow>
// </value>
// </block>
// <block type="lists_length"></block>
// <block type="lists_isEmpty"></block>
// <block type="lists_indexOf">
// <field name="END">FIRST</field>
// <value name="VALUE">
// <block type="variables_get">
// <field name="VAR" id="alisL~4y|Gkl!c5U?DDU">list</field>
// </block>
// </value>
// </block>
// <block type="lists_getIndex">
// <mutation statement="false" at="true"></mutation>
// <field name="MODE">GET</field>
// <field name="WHERE">FROM_START</field>
// <value name="VALUE">
// <block type="variables_get">
// <field name="VAR" id="alisL~4y|Gkl!c5U?DDU">list</field>
// </block>
// </value>
// </block>
// <block type="lists_setIndex">
// <mutation at="true"></mutation>
// <field name="MODE">SET</field>
// <field name="WHERE">FROM_START</field>
// <value name="LIST">
// <block type="variables_get">
// <field name="VAR" id="alisL~4y|Gkl!c5U?DDU">list</field>
// </block>
// </value>
// </block>
// <block type="lists_getSublist">
// <mutation at1="true" at2="true"></mutation>
// <field name="WHERE1">FROM_START</field>
// <field name="WHERE2">FROM_START</field>
// <value name="LIST">
// <block type="variables_get">
// <field name="VAR" id="alisL~4y|Gkl!c5U?DDU">list</field>
// </block>
// </value>
// </block>
// <block type="lists_split">
// <mutation mode="SPLIT"></mutation>
// <field name="MODE">SPLIT</field>
// <value name="DELIM">
// <shadow type="text">
// <field name="TEXT">,</field>
// </shadow>
// </value>
// </block>
// <block type="lists_sort">
// <field name="TYPE">NUMERIC</field>
// <field name="DIRECTION">1</field>
// </block>
// </category>

// <category name="Fonctions" colour="#995ba5" custom="PROCEDURE"></category>

// <sep></sep>
// </xml>
