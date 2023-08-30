// //美团和快手都问过
// function findLongestSubstring(str) {
//   let left = 0
//   let right = 0
//   let maxLen = 0
//   let start = 0
//   let set = new Set()

//   while (right < str.length) {
//     if (!set.has(str.charAt(right))) {
//       set.add(str.charAt(right))
//       if (right - left + 1 > maxLen) {
//         maxLen = right - left + 1
//         start = left
//       }
//       right++
//     } else {
//       set.delete(str.charAt(left))
//       left++
//     }
//   }

//   return str.substring(start, start + maxLen)
// }

// console.log(findLongestSubstring('abcabcbb')) // expected output: 'abc'
// console.log(findLongestSubstring('bbbbb')) // expected output: 'b'
// console.log(findLongestSubstring('pwwkew')) // expected output: 'wke'

// console.log(longestNonRepeatingSubstring('abcabcbb')) // Output: "abc"
// // function longestNonRepeatingSubstring(str) {
// //   let map = new Map()
// //   let res = ''
// //   for (let i = 0; i < str.length; i++) {
// //     let char = str[i]
// //     if (map.has(char)) return res
// //     else {
// //       map.set(char, i)
// //       res += char
// //     }
// //   }
// //   return res
// // }

// const str = 'abcdef'
// const substr = str.substr(0, 1)
// console.log(substr)

function findLongestSubstring(str) {
  //双指针方法
  let maxLen = 0
  let start = 0
  let set = new Set() //使用set来判断是否重复字符
  for (var left = 0, right = 0; right < str.length; ) {
    if (!set.has(str[right])) {
      set.add(str[right])
      let len = right - left + 1
      // maxLen = Math.max(len, maxLen)
      if (len > maxLen) {
        maxLen = len
        start = left
      }
      right++
    } else {
      //遇到了重复的字符
      set.delete(str[left])
      left++
    }
  }
  maxLen
  return str.substring(start, start + maxLen)
}

function getMaxSubstring(str) {
  //双指针的方法
  let left = 0
  let right = 0
  let start = 0
  let maxLen = 0
  let set = new Set()
  while (right < str.length) {
    if (!set.has(str[right])) {
      set.add(str[right])
      let len = right - left + 1
      if (len > maxLen) {
        maxLen = len
        start = left
      }
      right++
    } else {
      set.delete(str[left])
      left++
    }
  }
  return str.substring(start, start + maxLen)
}

console.log(getMaxSubstring('abcabcbb')) // expected output: 'abc'
console.log(getMaxSubstring('bbbbb')) // expected output: 'b'
console.log(getMaxSubstring('pwwkew')) // expected output: 'wke'
