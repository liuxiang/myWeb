
# 关键描述
- async 步执行函数,目的:页面同步刷新(柯里化)
- sycFuncPromise 返回Promise的方法,处理连续的异步func调用.(可完全替代async)
- currying 柯里化,单行定义函数且执行函数
```
function _Each(index, length) {
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
}
_Each(0, $('.bookname_content>.bookname').length);
```
```
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
```

- el 简化选择器(支持angular选择器,jquery,querySelector)
```
/**
 * 简化选择器
 * @param selector
 * @param index
 * @returns {*}
 */
function el(selector, index) {
  var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
  return window.angular ? angular.element(document.querySelectorAll(selector)[index]) : $(selector);
}

exports.el = el;
```

---

# 使用
## 方式一
- index.html
```
  <script src="autoTest/core.aat.js"></script>
  <script src="autoTest/task.aat.js"></script>
```

## 方式二
# require.js 模块化方式
- index.html
```
<script data-main="js/index" src="lib/require.js"></script><!--  模块化入口 -->
```
- js/index.js 配置初始化
- requirejs(['aat_core', 'aat'], function (aat_core, task) 对象初始化
```
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
```

- core.aat.js (直接引用情况下会exports会使用window)
```
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :// CommonJS
    typeof define === 'function' && define.amd ? define(['exports'], factory) : // AMD
      (factory((global.aat = global.aat || {}))); // window
}(this, (function (exports) {
  'use strict';
 
  exports.xxx = '';
 
})));

// ---
或者,直接使用window进行赋值.
```
- task.aat.js (直接引用情况下会exports会使用window)
```
 
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :// CommonJS
    typeof define === 'function' && define.amd ? define(['exports'], factory) : // AMD
      (factory((global.aat = global.aat || {}))); // window
}(this, (function (exports) {
  'use strict';
 
  exports.sss = '';
 
})));
// ---
或者,直接使用window进行赋值.
```

---

# require.js 模块化方式
- index.html
```
<script data-main="js/index" src="lib/require.js"></script><!--  模块化入口 -->
```
- js/index.js 配置初始化
- requirejs(['aat_core', 'aat'], function (aat_core, task) 对象初始化
```
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
```
- core.aat.js (模块化引用情况下会exports会使用AMD)
```
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :// CommonJS
    typeof define === 'function' && define.amd ? define(['exports'], factory) : // AMD
      (factory((global.aat = global.aat || {}))); // window
}(this, (function (exports) {
  'use strict';
 
  exports.xxx = '';
 
})));
```
- task.aat.js (模块化引用情况下会exports会使用AMD)
> require('aat_core') 注意需要requirejs.config初始化`aat_core`且 `requirejs(['aat_core', 'aat'], function (aat_core, aat)`完成初始化
```
 
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :// CommonJS
    typeof define === 'function' && define.amd ? define(['exports'], factory) : // AMD
      (factory((global.aat = global.aat || {}))); // window
}(this, (function (exports) {
  'use strict';
 
  /** 引入模块接口(规范模块化,兼容AMD) */
  var core = (typeof require === 'function') ? require('aat_core') : exports;
  var sycFuncPromise = core.sycFuncPromise;
  var async = core.async;
  var currying = core.currying;
  var el = core.el;

  exports.sss = '';
 
})));
```

--- 
# 使用时初始化(使用文件名)
见: `task.aat.js` define(function (require, exports, module) { require('path/filename'); })
- js/index.js 配置初始化
- requirejs(['aat'], function (aat) 对象初始化(仅初始化主函数)
```
requirejs.config({
  baseUrl: '',
  paths: {
    aat: 'autoTest/task.aat'
  }
});
 
// Start the main app
requirejs(['aat'], function (aat) {
  console.log(aat);// 初始化验证
  window.aat = aat;
});
```

- task.aat.js (模块化引用情况下会exports会使用AMD)
> require('autoTest/aat_core'') 可不需要requirejs.config初始化`aat_core`及 `requirejs(['aat_core', 'aat'], function (aat_core, aat)`
```
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :// CommonJS
    typeof define === 'function' && define.amd ? define(factory) : // AMD
      (factory(null,(global.aat = global.aat || {}))); // window
}(this, (function (require,exports) {
  'use strict';
 
  /** 引入模块接口(规范模块化,兼容AMD) */
  var core =require('autoTest/aat_core')
  var sycFuncPromise = core.sycFuncPromise;
  var async = core.async;
  var currying = core.currying;
  var el = core.el;

  exports.sss = '';
 
})));
```
- 简易参考
```
//这里按照commonjs的形式让requirejs自己去搜一遍，再引入third.js
define(function (require, exports, module) {
    var third =require('third');
    third();
    module.exports.action = function () {console.log(22)};
});
```