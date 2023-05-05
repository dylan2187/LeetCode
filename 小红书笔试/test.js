// let temp = 5
// function out(val) {
//   temp++
//   return val + 2
// }
// function func(a, b = out(a)) {
//   return a + b
// }
// func(2)
// console.log(func(3))
// console.log(temp)
// let num1 = '10'
// switch (num1) {
//   case '10':
//     console.log(2)
//   case 10:
//     console.log(3)
//     break
//   default:
//     console.log('d')
//   case 1:
//     console.log(4)
//     break
//   case 2:
//     console.log(5)
// }

// var arr = [1, 2]
// Object.defineProperty(arr, 2, {})
// console.log(arr[2])

// class A {}
// class B extends A {
//   constructor() {}
//   static b() {
//     return 'b'
//   }
//   num = 0
// }

// // console.log(B.num)
// new B()

function find(i) {
  if (i == 0 || i == 1 || i == 2) return i
  else return find(i - 1) + find(i - 2)
}
let i
i = find(10)
console.log(i)
