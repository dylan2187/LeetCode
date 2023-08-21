// class cls1 {}
// class cls2 extends Object {}
// console.log(cls1.__proto__ === Function.prototype)
// console.log(cls1.prototype.__proto__ === Object.prototype)
// console.log(cls2.__proto__ === Object)
// console.log(cls2.prototype.__proto__ === Object.prototype)

// const target = {
//   m: function () {
//     console.log(this === proxy)
//   },
// }

// const proxy = new Proxy(target, {})
// target.m()
// proxy.m()

console.log(typeof (1).toString())
