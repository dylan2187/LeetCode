/*
 * @Date: 2023-05-23 12:08:45
 * @LastEditors: kai && neodylan@foxmail.com
 * @LastEditTime: 2023-05-23 16:36:21
 * @FilePath: /LeetCode/快手面试/event loop.js
 * 事件循环机制的练习
 */
console.log(1)
setTimeout(() => {
  console.log(2)
  new Promise((resolve, reject) => {
    resolve()
  }).then(() => {
    console.log(3)
  })
})
setTimeout(() => {
  console.log(4)
  new Promise((resolve, reject) => {
    resolve()
  }).then(() => {
    console.log(5)
  })
})
console.log(6)

// 首先执行第1行同步任务
// 第2行遇到宏任务，留着后面执行
// 第10行遇到宏任务，留着后面执行
// 执行第18行同步任务同步任务
// 当前宏任务执行完毕，有无微任务？无，继续执宏任务第2行setTimeout
// 执行第三行同步任务
// 执行promise同步任务
// 第6行promise.then是微任务，放入微任务队列
// 当前宏任务执行完毕，执行微任务promise.then
// 执行第10行宏任务setTimeout
// 执行同步任务11,12行
// 第14行放入微任务队列
// 当前宏任务执行完毕，执行微任务14 Promise.then

// console.log(1)

// setTimeout(()=>{
//     console.log(2)
// }, 0)

// new Promise((resolve, reject)=>{
//     console.log('new Promise')
//     resolve()
// }).then(()=>{
//     console.log('then')
// })

// console.log(3)
