const promiseAll = (promises) => {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new TypeError('参数不是数组')
    }
    let resArr = []
    let index = 0
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          index++
          resArr[i] = res
          if (index === promises.length) {
            resolve(resArr)
          }
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}
