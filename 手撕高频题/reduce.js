// Array.prototype.myReduce = function (fn, initialValue) {
//   //浅拷贝数组
//   var arr = Array.prototype.slice.call(this)
//   //注意: reduce() 对于空数组是不会执行回调函数的。
//   if (!arr.length) {
//     return
//   }
//   var sum = arr[0] //sum(是上面的prev)
//   //默认初始值
//   if (initialValue !== undefined) {
//     sum = initialValue
//   }
//   //遍历数组的每一个值
//   for (var i = 0; i < arr.length; i++) {
//     //每一个值都会在该方法中被（加工处理），
//     sum = fn.call(null, sum, arr[i], i, this)
//   }
//   //最后的返回值
//   return sum
// }

// const arr = [1, 2, 3, 4, 5]
// const res = arr.myReduce((calc, curr) => {
//   return calc + curr
// }, 0)
// console.log(res)

doA(function () {
  doB()
  doC(function () {
    doD()
  })
  doE()
})
doF()
