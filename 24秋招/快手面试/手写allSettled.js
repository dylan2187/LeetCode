function allSettled(promises) {
  return new Promise((resolve) => {
    let res = []
    const cnt = 0
    promises.forEach((item, index) => {
      Promise.resolve(item)
        .then((val) => {
          res[index] = {
            status: 'fulfilled',
            value: val,
          }
        })
        .catch((val) => {
          res[index] = {
            status: 'rejected',
            reason: val,
          }
        })
      cnt++
      if (cnt === promises.length) resolve(res)
    })
  })
}
