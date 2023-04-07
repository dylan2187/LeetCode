// console.log(1)
// setTimeout(() => {
//   console.log(2)
// }, 0) //宏任务

// new Promise((resolve, reject) => {
//   console.log('new Promise')
//   resolve()
// }).then(() => {
//   console.log('then')
// })
// console.log(3)


//下面这道题是美团一面的时候问的
// 输出结果？

setTimeout(function () {
  console.log(1);
})

Promise.resolve(function () {
  console.log(2)
})
//这里并不会输出，7-9行的意思是：把这个函数作为参数传递，后续有then调用的话
//注意promise.resolve的输出，这里并没有输出，如果传入的是函数类型，则会被当作普通值来处理，并直接返回一个状态为 resolved 的 Promise 对象。
//看一下promise的原理
new Promise(function (resolve) {
  console.log(3);
  resolve();
}).then(function () {
  console.log(4)
})

console.log(5)

// x x x x