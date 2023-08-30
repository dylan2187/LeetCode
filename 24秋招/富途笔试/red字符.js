// 给定一个字符串，请你求出有多少个连续子串包含'r'和'e'字符，但不包含'd'字符？
function countSubstrings(s) {
  let count = 0
  let left = 0
  let right = 0
  let hasR = false
  let hasE = false

  while (right < s.length) {
    if (s[right] === 'r') {
      hasR = true
    } else if (s[right] === 'e') {
      hasE = true
    } else if (s[right] === 'd') {
      left = right + 1
      hasR = false
      hasE = false
    }

    if (hasR && hasE) {
      count += right - left + 1
      hasR = false // reset after counting
    }

    right++
  }

  return count
}
const res = countSubstrings('raefadr')
console.log(res)
