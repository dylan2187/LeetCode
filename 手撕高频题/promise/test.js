const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1')
  }, 3000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2')
  }, 2000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3')
  }, 5000)
})

Promise.all([p1, p2, p3]).then((val) => {
  console.log(val)
})
