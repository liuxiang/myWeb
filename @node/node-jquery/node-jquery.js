/**
 * Created by Administrator on 2016/10/10 0010.
 */
(function () {
  'use strict';

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

})();
