//也是使用滑动窗口来解决

function judge(str) {
  //判断一个字符是否是回文串
  let left = 0
  let right = str.length - 1
  for (; left < right; left++, right--) {
    if (str[left] !== str[right]) {
      return false
    }
  }
  return true
}

function findMaxSubstr(str) {
  let start = 0
  let maxLen = 0
  let left = 0
  let right = 0
  while (right < str.length) {
    let len = right - left + 1
    let substr = str.substring(left, left + len) //子串
    if (judge(substr)) {
      //如果是回文子串
      if (len > maxLen) {
        start = left
        maxLen = len
      }
      right++
    } else {
      left++
    }
  }
  return str.substring(start, start + maxLen)
}
const str = 'abad'
const res = findMaxSubstr(str)
console.log(res)

console.log(str.substr(-3, 2))
熟悉前端构建工具Webpack，了解Vite、Roolup，熟悉CICD等工程化方案
