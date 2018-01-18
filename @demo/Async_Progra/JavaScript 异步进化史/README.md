

```
// 创建一个 Promise 实例（异步接口和 Promise 签订协议）
var promise = new Promise(function (resolve,reject) {
  ajax('url',resolve,reject);
});

// 调用实例的 then catch 方法 （成功回调、异常回调与 Promise 签订协议）
promise.then(function(value) {
  // success
}).catch(function (error) {
  // error
})
```