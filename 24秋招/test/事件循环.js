async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(() => {
  console.log('settimeout')
})

async1()
new Promise((resolve, reject) => {
  console.log('promise1')
  resolve()
}).then(function () {
  console.log('promise2')
})
console.log('script end')

// 输出
// script start
