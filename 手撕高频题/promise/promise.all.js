function promiseAll(promises) {
  //判断输入的是不是数组
  if (!Array.isArray(promises)) {
    throw new TypeError('请输入数组')
  }

  return new Promise((resolve, reject) => {
    // 返回一个Promise对象，如果promises中所有的promise都fulfilled，则fulfilled，并将所有返回的参数以数组形式返回；如果promises中有一个rejected，则rejected，并返回第一个rejected的参数
    let res = []
    let counter = promises.length
    promises.forEach((item) => {
      item
        .then((val) => {
          res.push(val)
          counter--
          if (counter === 0) {
            resolve(res)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
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
