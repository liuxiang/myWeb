/**
 * Created by Administrator on 2016/7/2.
 */
(function () {
  'use strict';

  (function () {
    function a() {
      var age = 10;
      return function () {
        return age;
      }
    }

    // a() 返回的私有函数，由于函数内部的函数，可以访问函数局部变量。所以间接获取到了函数内部值
    var age = a();
    console.log(age());// 10
  });

  // ---------------------------------------------------
  (function () {

    function Cat() {
      var age = 10;

      function getAge() {
        return age;
      }

      function grow() {
        age++;
      }

      return {
        getAge: getAge,
        grow: grow
      };
    };

    var cat = Cat();
    var age = cat.getAge();
    console.log(age); // 10
    cat.grow();
    age = cat.getAge();
    console.log(age); // 11
  })();

})();