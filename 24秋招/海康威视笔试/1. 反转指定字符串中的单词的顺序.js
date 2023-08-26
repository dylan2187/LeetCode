// 反转指定字符串中的单词的顺序
// input: Hikvision Digital Technology
// output: Technology Digital Hikvision
function reverse(inputString) {
  const arr = inputString.split(/\s+/)
  let res = arr.reverse().join(' ')
  return res
  // const len = arr.length
  // for (let i = len - 1; i >= 0; i--) {
  //   res += arr[i]
  //   if (i !== 0) {
  //     res += ' '
  //   }
  // }
  // return res
}

const inputString = 'Hikvision Digital Technology'
const res = reverse(inputString)
console.log(res)
