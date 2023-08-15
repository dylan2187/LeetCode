let a = 1
const calcFunc = () => {
  setTimeout(() => {
    a = 100
  }, 1000)
  return a * 2
}

setTimeout(() => {
  a *= 2
}, 500)

const getResFunc = calcFunc

setTimeout(() => {
  console.log(getResFunc())
}, 2000)
