function throttle(fn, delay) {
  let timer = null
  return function (...argus) {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, argus)
      timer = null
    }, delay)
  }
}
// let cnt = 0
// const throttledFunction = throttle(() => {
//   console.log(`the throttled function has been called ${++cnt} timers`)
// }, 5000)

// let intervalId = setInterval(() => {
//   throttledIncrement();

//   // 在 10 秒后停止连续触发
//   if (count >= 10) {
//       clearInterval(intervalId);
//   }
// }, 200);
// 定义一个需要节流的函数
let count = 0
function increment() {
  console.log('Increment count: ', ++count)
}

// 创建一个节流版的 increment 函数
let throttledIncrement = throttle(increment, 1000)

// 模拟连续触发
let intervalId = setInterval(() => {
  throttledIncrement()

  // 在 10 秒后停止连续触发
  if (count >= 10) {
    clearInterval(intervalId)
  }
}, 200)
