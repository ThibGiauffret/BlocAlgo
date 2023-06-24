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
  
    // Comming soon !
    return Blockly.Msg;
  });
  