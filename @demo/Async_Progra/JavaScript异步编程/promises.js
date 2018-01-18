/**
 * Created by Administrator on 2016/7/18 0018.
 */
(function () {
  'use strict';

  jquery(($) => {
    function f2() {
      console.log("f2");
    }

    function f1() {
      var dfd = $.Deferred();// 依赖jquery

      console.log("f1");// f1的任务代码
      setTimeout(function () {
        dfd.resolve();
      }, 1000);
      // 在原来的deferred对象上返回另一个deferred对象，后者只开放与改变执行状态无关的方法（比如done()方法和fail()方法），屏蔽与改变执行状态有关的方法（比如resolve()方法和reject()方法），从而使得执行状态不能被改变。
      return dfd.promise();
    }

    f1().then(f2);
  })

})();

/*********************** node-jquery ***********************/
// cnpm install jquery && cnpm install jsdom  # https://github.com/UncoolAJ86/node-jquery
function jquery(callback) {
  var env = require('jsdom').env, html = '<html><body><h1>Hello World!</h1><p class="hello">Heya Big World!</body></html>';
  env(html, function (errors, window) {
    //console.log(errors);
    var $ = require('jquery')(window);
    callback($);
    // console.log($('.hello').text());
  });
}
