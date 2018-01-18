/**
 * Created by Administrator on 2016/9/16 0016.
 */
(function () {
  'use strict';

  requirejs.config({
    baseUrl: '',
    paths: {
      aat_core: 'autoTest/core.aat',
      aat: 'autoTest/task.aat'
    }
  });

// Start the main app
  requirejs(['aat_core', 'aat'], function (aat_core, aat) {
    console.log(aat);// 初始化验证
    window.aat = aat;
  });

})();
