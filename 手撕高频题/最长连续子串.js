// function findLongestRepeatedSubstring(str) {
//   let maxCount = 0
//   let maxChar = ''
//   let prevChar = ''
//   let count = 0

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === prevChar) {
//       count++
//       if (count > maxCount) {
//         maxCount = count
//         maxChar = str[i]
//       }
//     } else {
//       count = 1
//       prevChar = str[i]
//     }
//   }

//   return maxChar.repeat(maxCount)
// }

// console.log(findLongestRepeatedSubstring('aabbbcccc')) // 输出 "cccc"
var addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0 // 进位数，即留到下一轮相加的数
  let res = [] // 存放相加结果的个位数
  while (i >= 0 || j >= 0 || carry !== 0) {
    //  将v1 ， v2 转为数值，其中一个数加完 <0 后赋值对应值为0，防止出错
    const v1 = i >= 0 ? num1.charAt(i) - '0' : 0
    const v2 = j >= 0 ? num2.charAt(j) - '0' : 0
    let val = v1 + v2 + carry
    res.unshift(val % 10) // 将相加后的个位数放进数组，用unshift从头往前放，因为是从后往前相加的
    carry = Math.floor(val / 10) // 相加后的十位数，留在下一次作为进位数一起进行相加
    // 两个指针继续往前走
    i--
    j--
  }
  return res.join('')
}

console.log(addStrings('12883927392839810', '23793183088791481382380'))
