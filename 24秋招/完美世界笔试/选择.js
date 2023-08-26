// var a = []
// for (var i = 0; i < 3; i++) {
//   a[i] = function () {
//     console.log(i)
//   }
// }
// a[0]()
// a[1]()
// a[2]()
// 这个题咋回事

// 变量提升
function sayHi() {
  console.log(str)
  console.log(age)
  var str = 'hello pwrd'
  let age = 12
}
sayHi()
