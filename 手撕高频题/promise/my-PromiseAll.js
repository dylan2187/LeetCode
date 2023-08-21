function promiseAll(promises) {
  // promises中所有promise为fulfilled，则fulfilled，并返回结果数组；如果有一个为rejected，则rejected，返回结果是第一个reject中的参数
  return new Promise((resolve, reject) => {
    let res = []
    let count = promises.length
    for (let i in promises) {
      promises[i]
        .then((val) => {
          res.push(val)
          count--
          if (count === 0) {
            resolve(res)
          }
        })
        .catch((val) => {
          reject(val)
        })
    }
  })
}

const p1 = Promise.resolve('haha')
const p2 = Promise.resolve('haha')
const p3 = Promise.resolve('haha')

myPromiseAll([p1, p2, p3])
  .then((val) => {
    console.log(val)
  })
  .catch((err) => {
    console.log(err)
  })

function myPromiseAll(promises) {
  // 返回一个Promise对象，如果promises中所有的promise都fulfilled，则fulfilled，并将所有返回的参数以数组形式返回；如果promises中有一个rejected，则rejected，并返回第一个rejected的参数
  return new Promise((resolve, reject) => {
    let res = []
    let count = promises.length
    for (let i in promises) {
      promises[i]
        .then((val) => {
          res.push(val)
          count--
          if (count === 0) {
            resolve(res)
          }
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}
