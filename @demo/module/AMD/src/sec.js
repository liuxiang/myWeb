//sec.js
//这里按照commonjs的形式让requirejs自己去搜一遍，再引入third.js
define(function (require, exports, module) {

  var third = require('third');
  third();

  module.exports.action = function () {
    console.log('run sec.js')
  };
});
