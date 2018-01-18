/**
 * Created by Administrator on 2016/9/13 0013.
 */


(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :// CommonJS
    typeof define === 'function' && define.amd ? define(['exports'], factory) : // AMD
      (factory((global.aat = global.aat || {}))); // window
}(this, (function (exports) {
  'use strict';

  /**
   * 返回Promise的方法,处理连续的异步func调用
   * @param func
   * @returns {Function}
   */
  function sycFuncPromise(func, time) {
    return function () {
      var _arguments = arguments;
      return new Promise(function (resolve, reject) { // promise方式
        async(function () {
          func(_arguments);
          resolve();// 执行完毕,推送成功
        }, time)();
      })
    }
  }

  /**
   * 柯里化
   * @param func
   * @returns {Function}
   * @private
   */
  function currying(func) {
    var _arguments = arguments;
    return function () {
      // return func.call(this, ...arguments, ..._arguments);
      return func.apply(this, arguments, _arguments);
    }
  }

  /**
   * 异步执行函数,目的:页面同步刷新(柯里化)
   * 经过调试,在angular应用中700ms比较合适(原因是路由间动画需要时间)
   * @param func
   * @param time
   * @returns {Function}
   */
  function async(func, time) {
    var time = arguments.length <= 1 || arguments[1] === undefined ? 700 : arguments[1];
    return function () {
      var _arguments = arguments;
      setTimeout(function () {
        // return func.call(this, ..._arguments);
        return func.apply(this, _arguments);
      }, time)
    }
  }

  /** 出口 */
  // global.aat = {
  //   sycFuncPromise: sycFuncPromise, // 返回Promise的方法,处理连续的异步func调用
  //   async: async,                   // 异步执行函数
  //   currying: currying              // 柯里化
  // };

  exports.sycFuncPromise = sycFuncPromise;
  exports.async = async;
  exports.currying = currying;
  /*******************************************************/

  /**
   * 简化选择器
   * @param selector
   * @param index
   * @returns {*}
   */
  function el(selector, index) {
    var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
    return typeof angular === 'object'
      ? angular.element(document.querySelectorAll(selector)[index])
      : (window.jQuery ? $(selector) : document.querySelectorAll(selector)[index]);
  }

  exports.el = el;

  /*******************************************************/

  /**
   * 同步睡眠,如:sleep(3000);
   * @param delay
   */
  function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
  }

  /**
   * 强行重绘
   */
  function refresh() {
    // 对面板强行重绘
    $("ion-content").css('display', 'none');
    document.body.offsetWidth;// 在样式变化间加入计算,可强制提交之前的样式变化。否则浏览器会进行事务优化，事务前后无变化的不再重绘
    $("ion-content").css('display', '');

  }

})));
