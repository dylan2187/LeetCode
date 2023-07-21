// // 箭头函数练习
// // 计算nums中所有偶数的平方的总和
// let nums = [1, 4, 2, 3, 12, 15, 21]
// let res = nums
//   .filter((item) => {
//     return item % 2 === 0
//   })
//   .map((item) => {
//     return item * item
//   })
//   .reduce((total, currentVal) => {
//     return total + currentVal
//   }, 1)

// console.log(res)

// //二维数组转为一维数组
// console.log('/二维数组转为一维数组')

// var arr = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ]

// let arr1 = arr.reduce((prev, curr) => {
//   return prev.concat(curr)
// })
// console.log(arr1)

// //数组去重
// console.log('数组去重')
// var arr2 = [1, 2, 3, 2, 2, 3, 5, null, null, 0, false, false, true]

// let arr3 = arr2.reduce((prev, curr) => {
//   return prev.includes(curr) ? prev : prev.concat(curr)
// }, [])

// console.log(arr3)

//箭头函数中this的使用

// let obj = {
//   name: 'wangkai',
//   foo: () => {
//     var bar = () => {
//       console.log('///')
//       console.log(this)
//     }
//     return bar
//   },
// }

// console.log('obj')
// obj.foo()()

//箭头函数this的查找

var obj = {
  data: [],
  getData: function () {
    setTimeout(() => {
      console.log(this)
    }, 1000)
  },
}

obj.getData()
