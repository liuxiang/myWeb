/**
 * Created by Administrator on 2016/7/30 0030.
 */
(function () {
  'use strict';

  function demo() {
    var promise1 = new Promise(function (resolve) {
      // 可能由于某些原因导致同步调用
      resolve('B');
    });
    // promise依旧会异步执行
    promise1.then(function (value) {
      console.log(value)
    });
    console.log('A');
  }

  /******************************************************/

  function one() {
    var promise1 = new Promise(function (resolve) {
      // 可能由于某些原因导致同步调用
      resolve('B');
    });
    // promise依旧会异步执行
    promise1.then(function (value) {
      console.log(value)
    });
    console.log('A');
    // A B （先 A 后 B）
  }

  function two() {
    var promise2 = new Promise(function (resolve) {
      // 成功回调被通知了2次
      setTimeout(function () {
        resolve();
      }, 0)
    });
    // promise只会调用一次
    promise2.then(function () {
      console.log('A')
    });// A (只有一个)
  }

  function three() {

    var promise3 = new Promise(function (resolve, reject) {
      // 成功回调先被通知，又通知了失败回调
      setTimeout(function () {
        resolve();
        reject();
      }, 0)

    });
    // promise只会调用成功回调
    promise3.then(function () {
      console.log('A')
    }).catch(function () {
      console.log('B')
    });
    // A（只有A）
  }

  // demo();
  // one();
  // two();
  // three();

})();
