new Promise((resolve, reject) => {
  resolve()
  console.log('hahaha')
  reject()
})
  .then(() => {
    console.log('success')
  })
  .catch(() => {
    console.log('failed')
  })
  .finally(() => {
    console.log('finally')
  })
