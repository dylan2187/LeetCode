// ;(function (x) {
//   delete x
//   console.log(x)
// })(1)

// console.log(!!Number(['0']))

// var a = 1
// function fn1(b) {
//   var a = 2
//   return fn2(b)
// }
// function fn2(b) {
//   return a + b
// }

// console.log(fn1(3))

// var a = 0,
//   b = 0
function A(c) {
  A = function (b) {
    console.log(c + b++)
  }
  console.log(c)
}
A(1)
A(12)
