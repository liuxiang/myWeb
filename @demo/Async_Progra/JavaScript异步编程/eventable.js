/**
 * Created by Administrator on 2016/7/30 0030.
 */
(function () {
  'use strict';

  jquery(($) => {
    var eventable = {
      on: function (event, cb) {
        $(this).on(event, cb);
      },
      trigger: function (event, args) {
        $(this).trigger(event, args);
      }
    }

    function f2() {
      console.log("f2");
    }

    var f1 = {
      run: function () {
        // f1执行逻辑
        console.log("f1");
        setTimeout(function () {
          f1.trigger("done");
        }, 1000);
      }
    };

    $.extend(f1, eventable);
    f1.on("done", f2);
    f1.run();
  })

})();


/*********************** node-jquery ***********************/
function jquery(callback) {
  var env = require('jsdom').env, html = '<html><body><h1>Hello World!</h1><p class="hello">Heya Big World!</body></html>';
  env(html, function (errors, window) {
    //console.log(errors);
    var $ = require('jquery')(window);
    callback($);
    // console.log($('.hello').text());
  });
}
