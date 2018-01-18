/**
 * Created by Administrator on 2016/7/20 0020.
 */
(function () {
  'use strict';

  function f2() {
    console.log("f2");
  }

  function f1(callback) {
    console.log("f1");
    setTimeout(function () {
      callback();
    }, 1000);
  }

  // 执行
  f1(f2);

})();
