//sec.js
//这里按照commonjs的形式让requirejs自己去搜一遍，再引入third.js
define(['exports','third'],function (exports,third) {

  third();

  exports.action = function () {
    console.log('run sec_2.js')
  };
});
