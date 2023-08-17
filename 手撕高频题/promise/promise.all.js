function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = []
    let count = promises.length
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((result) => {
          results[i] = result
          count--
          if (count === 0) {
            resolve(results)
          }
        })
        .catch((error) => {
          reject(error)
        })
    }
  })
}

const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3)

promiseAll([p1, p2, p3])
  .then((results) => {
    console.log(results) // [1, 2, 3]
  })
  .catch((error) => {
    console.error(error)
  })

const some = 1
console.log(Object.prototype.toString.apply(() => {}))
