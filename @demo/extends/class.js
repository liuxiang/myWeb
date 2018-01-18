/**
 * Created by Administrator on 2016/8/3 0003.
 */
(function () {
  'use strict';

  class Car {
    constructor() {
      console.log("Creating a new car");
    }
  }

  class Porsche extends Car {
    constructor() {
      super();
      console.log("Creating Porsche");
    }
  }

  let c = new Porsche();

})();
