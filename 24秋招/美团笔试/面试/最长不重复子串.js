function maxSubstring(str) {
  //可以使用双指针的方法来做
  let left = 0
  let right = 0
  let start = 0
  let maxLen = 0
  let set = new Set()
  // 找到最长不重复子串开始的索引和长度
  while (right < str.length) {
    let char = str[right]
    // 不重复
    if (!set.has(char)) {
      set.add(char)
      let len = right - left + 1
      if (len > maxLen) {
        maxLen = len
        start = left
      }
      right++
    } else {
      //重复了
      set.delete(str[left])
      left++
    }
  }
  return str.substring(start, start + maxLen)
}

const str = 'abcda'
const res = maxSubstring(str)
console.log(res)
