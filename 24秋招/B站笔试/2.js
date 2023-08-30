// var name = '1'
// new Promise((resolve, reject) => {
//   resolve()
//   reject()
// }).then(() => {
//   name = '2'
//   console.log('haha')
// })

// name = 4

// console.log(name)

Function.prototype.fn1 = () => {
  console.log(1)
}
Object.prototype.fn2 = () => {
  console.log(2)
}

function Fn() {}
const fn = new Fn()
// fn.fn1()
fn.fn2()
