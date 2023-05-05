// 学习高阶函数reduce的使用方法
//用于计算数组中所有元素
// 使用reduce来实现数组的扁平化
// let arr = [1, 2, 3, 4]
// let res = arr.reduce((arr2, value) => {
//   arr2.push(value * 2)
//   return arr2
// }, [])

// console.log(res)

// 使用reduce来实现数组的扁平化
// let a = [1, 2, 3, [4, [5]]]
// function flat(arr) {
//   return arr.reduce((calc, cur) => {
//     let temp
//     if (Array.isArray(cur)) {
//       temp = flat(cur)
//     } else {
//       temp = cur
//     }
//     Object.prototype.toString.call(calc)
//     calc = calc.concat(temp)
//     return calc
//   }, [])
// }

// let ans = flat(a)
// console.log(ans)

//字符串拼接
// let brr = ['小铭', '小黄', '小花', '小驴', '小强']
// let res = brr.reduce((str, cur) => {
//   return str.concat(cur)
// }, '')

// res

// brr.join('')

// let s = [1, 2, 3, 4]
// let ress = s.reduce((sum, cur) => {
//   return sum + cur
// }, 0)

// ress

// 求出每个人的成绩的和
let students = [
  { id: 111, name: 'why', score: 199 },
  { id: 112, name: 'kobe', score: 98 },
  { id: 113, name: 'james', score: 199 },
  { id: 114, name: 'curry', score: 188 },
]

let res = students
  .filter((item) => item.score > 100)
  .reduce((sum, cur) => {
    return (sum += cur.score)
  }, 0)
console.log(res)

// 数组扁平化

let arr = [1, 2, [3, 4, [5]]]
function flat(arr) {
  let res = arr.reduce((calc, cur) => {
    return (calc = calc.concat(Array.isArray(cur) ? flat(cur) : cur))
  }, [])
  return res
}
console.log(flat(arr))
