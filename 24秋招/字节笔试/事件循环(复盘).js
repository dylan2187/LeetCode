const p1 = new Promise((res, rej) => {
  res(
    new Promise((res, rej) => {
      res(117)
    })
  )
})

const p2 = new Promise((res, rej) => {
  rej(
    new Promise((res, rej) => {
      rej(935)
    })
  )
})
const p3 = new Promise((res, rej) => {
  res(141)
})
p1.then((val) => {
  console.log(val)
})
p2.then(undefined, (err) => {
  console.log(935)
})
p3.then((val) => {
  console.log(val)
})
