/**
 * Created by Administrator on 2016/9/15 0015.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :// CommonJS
    typeof define === 'function' && define.amd ? define(['exports', 'aat_core'], factory) : // AMD
      (factory((global.aat = global.aat || {}))); // window
}(this, (function (exports) {
  'use strict';

  /** 引入模块接口(待规范模块化) */
    // var sycFuncPromise = global.aat.sycFuncPromise;
    // var async = global.aat.async;
    // var currying = global.aat.currying;

  var core = (typeof require === 'function') ? require('aat_core') : exports;

  /** 引入模块接口(规范模块化,兼容AMD) */
  var sycFuncPromise = core.sycFuncPromise;
  var async = core.async;
  var currying = core.currying;
  var el = core.el;

  /*********************************************************************/

  function init() {
  }

  var task = {
      chioseBook: function () {
        if (!$('.choice-content').hasClass('ng-hide')) {
          async(function (prom) {
            el('.nav-bar-title.ng-binding').triggerHandler('click')
          })()
        }

        currying(function _Each(index, length) {

          sycFuncPromise(function () {
            el('.nav-bar-title.ng-binding').triggerHandler('click');
          })()
            .then(function () {
              return sycFuncPromise(function () {
                el('.bookname_content>.bookname', index).triggerHandler('click');
                ++index < length && _Each(index, length);// 递归调用自己,相比for没有了时间计算
              })()
            })
            .then(function () {
              // ...
            })

        })(0, $('.bookname_content>.bookname').length);

      },
      openChapter: function () {

        currying(function _Each(index, length) {
          sycFuncPromise(function () {
            var selector = '.sections';
            var event = {type: 'click', currentTarget: document.querySelectorAll(selector)[index]};
            el(selector, index).triggerHandler(event);// 打开章节
          })()
            .then(function () {
              return sycFuncPromise(function () {
                $('.back-button').click();// 返回
                ++index < length && _Each(index, length);// 递归调用自己,相比for没有了时间计算
              })()
            })
            .then(function () {
              // ...
            })
        })(0, $('.sections').length);

      },
      practice: function () {
        currying(function _Each(index, length) {
            sycFuncPromise(function () {
              var selector = '.sections';
              var event = {type: 'click', currentTarget: document.querySelectorAll(selector)[index]};
              el(selector, index).triggerHandler(event);// 打开章节
            })()
              .then(function () {
                return new Promise(function (resolve, reject) {
                  sycFuncPromise(function () {
                    el('.practice_inlet').triggerHandler('click');// 打开练习

                    new Promise(function (resolve, reject) {
                      currying(function _Each(index, length) {
                        sycFuncPromise(function () {
                          el('.option', ~~(Math.random() * 4)).triggerHandler('click');// 打开1
                          ++index < length && _Each(index, length);// 递归调用自己,相比for没有了时间计算
                          index >= length && resolve();// 执行完毕,通知下一步环境
                        })()
                      })(0, 5);
                    }).then(function () {
                      sycFuncPromise(function () {
                        $('.back-button').click();// 返回
                        resolve();
                      })();
                    })
                  })()
                })
              })
              .then(function () {
                return sycFuncPromise(function () {
                  $('.back-button').click();// 返回
                  ++index < length && _Each(index, length);// 递归调用自己,相比for没有了时间计算
                })()
              })
              .then(function () {
                // ...
              })
          }
        )(0, $('.sections').length);
      },
      openExp_sign: function (index) {
        currying(function _Each(index, length) {
          sycFuncPromise(function () {
            el('.pointItem', index).triggerHandler('click');// 打开知识点(实验)
          })()
            .then(function () {
              return sycFuncPromise(function () {
                el('.closeExp').triggerHandler('click');// 关闭实验
                // 此次error: Blocked a frame with origin "http://localhost:3342" from accessing a cross-origin frame.
                ++index < length && _Each(index, length);// 递归调用自己,相比for没有了时间计算
                //index >= length && resolve();// 执行完毕,通知下一步环境
              }, 8000)();// 时间放大为3s
            })
            .then(function () {
              //...
            })
        })(0, $('.pointItem').length);
      }
      ,
      openExp: function () {
        currying(function _Each(index, length) {
          sycFuncPromise(function () {
            var selector = '.sections';
            var event = {type: 'click', currentTarget: document.querySelectorAll(selector)[index]};
            el(selector, index).triggerHandler(event);// 打开章节
          }, 1500)()
            .then(function () {
              return new Promise(function (resolve, reject) {
                async(function () {

                  currying(function _Each(index, length) {
                    sycFuncPromise(function () {
                      el('.pointItem', index).triggerHandler('click');// 打开知识点(实验)
                    }, 2000)().then(function () {
                      return sycFuncPromise(function () {
                        el('.closeExp').triggerHandler('click');// 关闭实验
                        ++index < length && _Each(index, length);// 递归调用自己,相比for没有了时间计算
                        index >= length && resolve();// 执行完毕,通知下一步环境
                      }, 8000)();// 时间放大为3s
                    })

                  })(0, $('.pointItem').length);

                }, 1500)();

              })
            })
            .then(function () {
              return sycFuncPromise(function () {
                $('.back-button').click();// 返回
                ++index < length && _Each(index, length);// 递归调用自己,相比for没有了时间计算
              }, 1500)()
            })
            .then(function () {
              // ...
            })
        })(0, $('.sections').length);
      }
    }
    ;

  var taskItems = [
    {name: '切换分册', action: task.chioseBook},
    {name: '打开本册章节', action: task.openChapter},
    // {name: '单个章节实验', action: task.openExp_sign},
    {name: '本册所有实验(移动端)', action: task.openExp},
    {name: '本册练习', action: task.practice}
  ];

  /**
   * 出口
   * aat:Asynchronous Auto Test
   * 异步自动化测试
   */
// global.aat = {
//   init: init,
//   task: task,
//   taskf: taskf
// };

  exports.init = init;
  exports.task = task;
  exports.taskItems = taskItems;

})))
;

/** 简易示例 */
// define(function (require, exports, module) {
//   var core = require('autoTest/core');
//   console.log('core', core);
//   module.exports.action = function () {
//     console.log(22)
//   };
// });
