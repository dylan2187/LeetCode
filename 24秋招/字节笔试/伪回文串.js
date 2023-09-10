function isPseudoPalindrome(s) {
  // 判断一个字符串是否是伪回文串
  let count = 0
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - i - 1]) {
      count += 1
    }
    if (count > 1) {
      return false
    }
  }
  return count === 1
}

function countPseudoPalindromeSubstrings(n, k, str) {
  let count = 0
  for (let i = 0; i <= n - k; i++) {
    let substr = str.substring(i, i + k)
    if (isPseudoPalindrome(substr)) {
      count += 1
    }
  }
  return count
}
const [n, k] = (await readline()).split(' ').map((item) => parseInt(item))
const str = await readline()
const res = countPseudoPalindromeSubstrings(n, k, str)
console.log(res)

const n = 5
const k = 3
const str = 'abcba'
const res = countPseudoPalindromeSubstrings(n, k, str)
console.log(res)
