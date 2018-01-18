/**
 * Created by Administrator on 2016/8/3 0003.
 */
(function () {
  'use strict';

  var parent = {
    foo() {
      console.log("Hello from the Parent");
    }
  }

  var child = {
    foo() {
      super.foo();
      console.log("Hello from the Child");
    }
  }

  Object.setPrototypeOf(child, parent);
  child.foo(); // Hello from the Parent
               // Hello from the Child
})();
