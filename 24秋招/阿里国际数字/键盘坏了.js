function countSubstrings(n, s, k, brokenLetters) {
  let count = new Array(128).fill(0)
  let invalidCount = 0
  let left = 0
  let result = new Set()
  for (let right = 0; right < n; right++) {
    if (
      brokenLetters.includes(s[right]) &&
      ++count[s[right].charCodeAt()] === 1
    ) {
      invalidCount++
    }
    while (invalidCount > k) {
      if (
        brokenLetters.includes(s[left]) &&
        --count[s[left].charCodeAt()] === 0
      ) {
        invalidCount--
      }
      left++
    }
    for (let i = left; i <= right; i++) {
      result.add(s.slice(i, right + 1))
    }
  }
  return result.size
}

const [n, k] = (await readline()).split(' ').map((item) => {
  return parseInt(item)
})
const s = await readline()
const brokenLetters = await readline()
const res = countSubstrings(n, s, k, brokenLetters)
console.log(res)

console.log(countSubstrings(9, 'abcabcabc', 1, 'ab')) // Output: 5

// let n = 9
// let k = 1
// let s = 'abcabcabc'
// let brokenLetters = 'ab'

// const res = countSubstrings(n, s, k, brokenLetters)
// console.log(res)
