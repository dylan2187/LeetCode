// Promise.resolve(function () {
//   console.log(2)
// }())
var isT = true
const promise = new Promise((resolve, reject) => {
  if (isT) {
    resolve(function () {
      console.log('成功啦');
    })  //把这个函数作为参数传递，等then来调用
  }
  else {
    reject('nono')
  }
})

promise.then((fun) => {
  fun()
}).catch((msg) => {
  console.log(msg);
}).finally(
  () => {
    console.log('finally');
  }
)