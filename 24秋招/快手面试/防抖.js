function debounce(func, wait) {
  let timeout
  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

let count = 0
const debouncedFunction = debounce(() => {
  console.log(`the func has been called ${++count} timers`)
}, 1000)

for (let i = 0; i < 10; i++) {
  debouncedFunction()
}

// let count = 0

// // 创建一个防抖函数
// let debouncedFunction = debounce(function () {
//   console.log(`The function has been called ${++count} times.`)
// }, 1000)

// // 调用防抖函数
// for (let i = 0; i < 10; i++) {
//   debouncedFunction()
// }

// Output: 'The function has been called 1 times.'

// let debounced = debounce(() => {
//   console.log('抖')
// }, 1000)

// for (let i = 0; i < 10; i++) {
//   debounced()
// }
