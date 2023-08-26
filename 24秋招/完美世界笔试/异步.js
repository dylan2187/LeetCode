// // async function async1() {
// //   console.log('1')
// //   await async2()
// //   console.log('2')
// // }
// // async function async2() {
// //   console.log('3')
// // }
// // console.log(4)
// // setTimeout(() => {
// //   console.log('5')
// // }, 0)

// // async1()

// // new Promise(function (resolve) {
// //   console.log('6')
// //   resolve()
// // }).then(function () {
// //   console.log('7')
// // })
// // //注意await后面的任务属于微任务

// console.log(1)
// setTimeout(() => {
//   console.log(2)
// })
// Promise.resolve().then(() => {
//   console.log(3)
// })
// console.log(4)

console.log([3, 1, 2].sort())
