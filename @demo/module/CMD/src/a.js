define(function (require, exports, module) {
  var b = require("b");
  b.doSomething();

  exports.doSomething = function () {
    console.log("in a.js");
  };
});
