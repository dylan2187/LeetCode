console.log('start')
async function ac() {
  console.log('ac-start')
  await new Promise((resolve) => {
    resolve('p3')
  }).then((res) => {
    console.log(res)
  })

  await new Promise((resolve) => {
    console.log('p1')
    return 'p2'
  })
  console.log('success')
  return 'ac-end'
}

ac().then((res) => {
  console.log(res)
})

console.log('end')
