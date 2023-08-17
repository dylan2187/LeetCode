new Promise((resolve, reject) => {
  resolve()
  reject()
})
  .then(() => {
    console.log('success')
  })
  .catch(() => {
    console.log('failed')
  })
