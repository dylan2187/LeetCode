// var a = 0,
//   b = 0
// function A(a) {
//   A = function (b) {
//     console.log(a + b++)
//   }
//   console.log(a)
// }

// A(1)
// A(12)

var a = 1
function fn1(b) {
  var a = 2
  return fn2(b)
}
function fn2(b) {
  return a + b
}
console.log(fn1(3))
