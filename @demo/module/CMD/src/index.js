// Set configuration
seajs.config({
  base: "./src",
  alias: {
    a: "a.js"
  }
});

//单一模式
// seajs.use('a');
// seajs.use('./src/a');

//回调模式
seajs.use('a', function(a) {
  a.doSomething();
});

// //多模块模式
// seajs.use(['a', 'b'], function(a, b) {
//   a.run();
//   b.run();
// });
