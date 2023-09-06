// let createArray = function () {
//   let arr = []
//   return function () {
//     arr.push(arr.length)
//     return arr
//   }
// }

// let myArrayFunc = createArray()
// console.log(myArrayFunc()) // 输出 [0]
// console.log(myArrayFunc()) // 输出 [0, 1]
// console.log(myArrayFunc()) // 输出 [0, 1, 2]
// ...以此类推

function foo() {
  let arr = []
  return function () {
    arr.push(arr.length)
    return arr
  }
}

const myFoo = foo()
console.log(myFoo())
console.log(myFoo())
console.log(myFoo())
