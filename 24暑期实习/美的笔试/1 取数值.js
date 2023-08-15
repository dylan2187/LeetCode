// 使用js完成下面这道题：
// 返回下面数组中能转为数值类型的值组成新的数组：'["567",null,"u44","0",1,"eleven","ten","99"]'
// 注意输入的数据是一行字符串
// let str = '["567",null,"u44","0",1,"eleven","ten","99"]'

// const arr = JSON.parse(str)
// Array.isArray(arr)
// let result = arr.filter(item => !isNaN(parseInt(item)))
// result = result.map(item => JSON.stringify(item))

// console.log(`[${result.join(',')}]`)

// let s = 567
// let aa = JSON.stringify(s)
// aa
// const input = '["567",null,"u44","0",1,"eleven","ten","99"]' // 输入的字符串数组
// const arr = JSON.parse(input) // 将字符串数组转换为实际的 JavaScript 数组
// const result = arr.filter(item => !isNaN(parseInt(item))).map(item => JSON.stringify(item)) // 过滤能转为数值类型的值，并将结果转换为字符串格式

// console.log(`[${result.join(',')}]`) // '["567","0",1,"99"]'

// const rl = require('readline').createInterface({ input: process.stdin })
// var iter = rl[Symbol.asyncIterator]()
// const readline = async () => (await iter.next()).value

// function fun(str) {
//   const arr = JSON.parse(str)
//   const result = arr.filter(item => !isNaN(parseInt(item))).map(item => JSON.stringify(item))

//   console.log(`[${result.join(',')}]`)
// }

// void (async function () {
//   // Write your code here
//   while ((line = await readline())) {
//     let arr = line
//     fun(arr)
//   }
// })()

const input = '["567",null,"u44","0",1,"eleven","ten","99"]'
let arr = JSON.parse(input)
arr

arr = arr.filter(item => {
  console.log(typeof item)
  return !isNaN(parseInt(item))
})
//注意parseInt(null)为0
//parseInt(null)为NaN

arr
arr = arr.map(item => {
  return JSON.stringify(item)
})
arr

let res = `[${arr.join(',')}]`

let arr1 = '""jfkda"sf"""'
const pattern = /"/g

arr1 = arr1.replace(/j/g, '_')
arr1
