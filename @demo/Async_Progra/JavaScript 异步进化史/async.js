/**
 * Created by Administrator on 2016/8/2 0002.
 */
(function () {
  'use strict';

  one();
  two();

  function one() {
    async function main {
      // timer 是在上一个例子中定义的
      var value = await timer(100);
      console.log(value); // done （100ms 后返回 done）
    }

    main();
  }

  function two() {
    var timer = new Promise(function create(resolve, reject) {
      if (typeof delay !== 'number') {
        reject(new Error('type error'));
      }
      setTimeout(resolve, delay, 'done');
    });

    async function main(delay) {
      try {
        var value1 = await timer(delay);
        var value2 = await timer('');
        var value3 = await timer(delay);
      } catch (err) {
        console.error(err);
        // Error: type error
        //   at create (<anonymous>:5:14)
        //   at timer (<anonymous>:3:10)
        //   at A (<anonymous>:12:10)
      }
    }

    main(0);
  }

})();
