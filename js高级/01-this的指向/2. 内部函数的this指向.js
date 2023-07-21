// setTimeout(() => {
//   console.log(this)
// }, 2000)

// let name = ['wk', 'dylan', 'kkk']
// name.forEach(
//   () => {
//     console.log(this)
//   },
//   // function () {
//   //   console.log(this)
//   // },
//   { name: 'wangkai' }
// )

// function foo() {
//   console.log(this)
// }

// let obj = {
//   name: 'wangkai',
//   foo,
// }

// obj.foo()

//严格模式下的指向 & this指向null？ undefined

// 'use strict'
// function foo() {
//   console.log(Object.prototype.toString.apply(this))
// }

// foo.apply('123')
// foo.apply(null)
// foo.apply(undefined)
