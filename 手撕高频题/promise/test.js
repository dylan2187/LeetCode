function execCode(data) {
  return new Promise((resolve, reject) => {
    if (data > 0) {
      resolve(data * 10)
    } else {
      reject(0)
    }
  })
}

execCode(100)
  .then((val) => {
    console.log('success, ', val)
  })
  .catch((val) => {
    console.log('failed,', val)
  })
