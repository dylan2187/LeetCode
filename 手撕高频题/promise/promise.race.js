const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1')
  }, 3000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2')
  }, 2000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p3')
  }, 5000)
})

function promiseRace(promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('输入不是数组')
  }

  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((val) => {
          resolve(val)
          return
        })
        .catch((err) => {
          reject(err)
          return
        })
    })
  })
}

Promise.allSettled([p1, p2, p3])
  .then((val) => {
    console.log('fulfilled', val)
  })
  .catch((err) => {
    console.log('err', err)
  })
