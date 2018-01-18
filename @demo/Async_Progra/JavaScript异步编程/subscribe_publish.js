/**
 * Created by Administrator on 2016/7/30 0030.
 */
(function () {
    'use strict';


    function f2() {
      console.log("f2");
    }

    jQuery.subscribe("done", f2);

    function f1(){
      // f1执行逻辑
      console.log("f1");
      setTimeout(function(){
        jQuery.publish("done");
      }, 1000);
    }

    f1();
    jQuery.unsubscribe("done", f2);     // 取消订阅

})();

/* 依赖 ****************************************************************/
// 使用jQuery插件 https://github.com/cowboy/jquery-tiny-pubsub
