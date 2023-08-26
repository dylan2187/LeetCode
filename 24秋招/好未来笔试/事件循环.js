setTimeout(() => {
  console.log('1')
}, 3000)

new Promise(function (resolve) {
  console.log('2')
  let a = 12

  for (var i = 0; i < 100000; i++) {
    a += i
  }
  resolve()
}).then(function () {
  setTimeout(() => {
    console.log('3')
  })
  console.log('4')
})

console.log(5)
