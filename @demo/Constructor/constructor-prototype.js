/**
 * Created by Administrator on 2016/7/20 0020.
 */
(function () {
  'use strict';

  // ------------------------------------ 普通函数
  function fn() {
    console.log("hello sheila");
  }

  fn();//alert:hello sheila
  console.log();

  // ------------------------------------ 原型链-构造函数

  function Prince(name, age) {
    // [new obj()] 函数内部可以使用this关键字在构造函数内部，this指向的是构造出的新对象
    this.gender = "male";
    this.kind = true;
    this.rich = true;
    this.name = name;
    this.age = age;
  }

  // 通过原型链-增加函数方法
  Prince.prototype.toFrog = function () {
    console.log("Prince " + this.name + " turned into a frog.");
  };

  var prince = new Prince("charming", 25);// 构造函数Prince()中的this指向新创建的对象prince
  prince.toFrog();//Prince charming turned into a frog.
  console.log(prince);
  console.log(prince.kind);//true
  console.log(prince.age);// 25 - 实例才能访问到
  console.log(Prince.age);// undefined - 不能用类型名访问

  // ------------------------------------ 原型链-构造函数(return)
  function Person(name) {
    this.name = name;
    return {name: "cherry"}
  }

  var person = new Person("sheila");
  console.log(person.name);//cherry
  console.log(person);//Object {name: "cherry"}



})();
