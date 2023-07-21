console.log(1)

// 宏任务
setTimeout(() => {
  console.log(2)
}, 0)

new Promise((resolve, reject) => {
  console.log('new Promise')
  resolve()
}).then(() => {
  // 微任务
  console.log('then')
})

console.log(3)

//输出 1
// new Promise
// 3
// then
// 2
