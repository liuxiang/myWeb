/**
 * Created by Administrator on 2016/7/20 0020.
 */
(function () {
  'use strict';

  console.log("--------------------------------- class");// 采用Class表达式，可以写出立即执行的Class
  class Person {

    /* 默认方法，通过new命令生成对象实例时，自动调用该方法 */
    constructor(name, age, job) {
      this.name = name;
      this.age = age;
      this.job = job;
    }

    sayName() {
      console.log(this.name);
    }
  }

  var friend = new Person("Nicholas", 29, "Software Engineer");
  friend.sayName();// Nicholas
  console.log(friend.age);// 29

  console.log();
  console.log(typeof Person);// function
  console.log(Person.prototype.constructor);// [Function: Person]

  console.log();
  console.log(Object.keys(Person.prototype));// [] - 内部所有定义的方法，都是不可枚举的（enumerable）
  console.log(Object.getOwnPropertyNames(Person.prototype));// ["constructor","sayName"]

  console.log();
  console.log(Person.prototype);// Person {}
  console.log(friend.__proto__ === Person.prototype);// true

  console.log("--------------------------------- class 表达式");// 采用Class表达式，可以写出立即执行的Class

  let person = new class {
    constructor(name) {
      this.name = name;
    }

    sayName() {
      console.log(this.name);
    }
  }("张三");// 采用Class表达式，可以写出立即执行的Class

  person.sayName(); // "张三"

  console.log("--------------------------------- 不存在变量提升");
  // new Foo(); // ReferenceError
  // class Foo {}

  console.log("--------------------------------- class 继承");
  {
    let Foo = class {
    };
    class Bar extends Foo {
    }
  }

  console.log("--------------------------------- 严格模式(use strict)");
  console.log("类和模块的内部，默认就是严格模式，所以不需要使用 use strict 指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用。");

  console.log("--------------------------------- class的取值函数（getter）和存值函数（setter）");
  class MyClass {
    constructor() {
      // ...
    }

    get prop() {
      return 'getter';
    }

    set prop(value) {
      console.log('setter: ' + value);
    }
  }

  let inst = new MyClass();
  inst.prop = 123;// setter: 123
  console.log(inst.prop);// 'getter'  - 调用属性的方式调用函数方法

  console.log("----------------- 存值函数和取值函数是设置在属性的descriptor(描述符)对象上的");
  class CustomHTMLElement {
    constructor(element) {
      this.element = element;
    }

    get html() {
      return this.element.innerHTML;
    }

    set html(value) {
      this.element.innerHTML = value;
    }
  }

  var descriptor = Object.getOwnPropertyDescriptor(CustomHTMLElement.prototype, "html");
  console.log("get" in descriptor);  // true
  console.log("set" in descriptor);  // true

  console.log("----------------- 为所有属性，设置存值函数和取值函数");
  class Jedi {
    constructor() {
      // ...
    }

    set(key, val) {
      this[key] = val;
    }

    get(key) {
      return this[key];
    }
  }
  let jedi = new Jedi();
  jedi.set('a', 'aa');
  console.log(jedi.get('a'));

  console.log("--------------------------------- Class的Generator方法");
  class Foo {
    constructor() {
      this.args = arguments;//  隐形参数列表
    }

    // 如果某个方法之前加上星号（*），就表示该方法是一个Generator函数
    * [Symbol.iterator]() {
      for (let arg of this.args) {
        yield arg;// Generator函数本意是iterator生成器，函数运行到yield时退出
      }
    }
  }

  for (let x of new Foo('hello', 'world')) {
    console.log(x);
  }

  console.log("--------------------------------- Class的静态方法");
  class Foo2 {
    static classMethod() {
      return 'hello';
    }
  }

  Foo2.classMethod(); // 'hello' - 可以直接在Foo类上调用

  var foo = new Foo2();
  // foo.classMethod(); // TypeError: undefined is not a function - 如果在实例上调用静态方法，会抛出一个错误，表示不存在该方法

  console.log("--------------------------------- 静态方法也是可以从super对象上调用的");
  class Foo3 {
    static classMethod() {
      return 'hello';
    }
  }

  class Bar extends Foo3 {
    static classMethod() {
      return super.classMethod() + ', too';
    }

    classMethod2() {
      return super.classMethod() + ', too'; // TypeError: (intermediate value).classMethod is not a function
    }
  }

  console.log(Bar.classMethod());
  // console.log(new Bar().classMethod2());

  console.log("--------------------------------- 必须使用new生成实例-new.target");

  console.log("--------------------------------- 本类不能实例化-new.target");
  // class Shape {
  //   constructor() {
  //     if (new.target === Shape) {
  //       throw new Error('本类不能实例化');
  //     }
  //   }
  // }
  //
  // class Rectangle extends Shape {
  //   constructor(length, width) {
  //     super();
  //     // ...
  //   }
  // }
  //
  // var x = new Shape();  // 报错
  // var y = new Rectangle(3, 4);  // 正确

})();
