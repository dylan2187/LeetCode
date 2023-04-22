function lengthOfLongestSubstring(str) {
  let maxLength = 0
  let start = 0
  const lastIndices = {}
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i)
    const lastIdx = lastIndices[ch]
    if (lastIdx >= start) {
      start = lastIdx + 1
    }
    lastIndices[ch] = i
    maxLength = Math.max(maxLength, i - start + 1)
  }
  return maxLength
}

lengthOfLongestSubstring('ccccaaqwer123')

function lengthOfLongestSubstring(s) {
  let maxLength = 0
  let start = 0
  const lastIndices = {}
  for (let i = 0; i < s.length; i++) {
    const ch = s.charAt(i)
    const lastIdx = lastIndices[ch]
    if (lastIdx >= start) {
      start = lastIdx + 1
    }
    lastIndices[ch] = i
    maxLength = Math.max(maxLength, i - start + 1)
  }
  return maxLength
}

function lengthOfLongestSubstring1(s) {
  let maxLength = 0
  let left = 0
  const set = new Set()
  for (let right = 0; right < s.length; right++) {
    const ch = s.charAt(right)
    while (set.has(ch)) {
      set.delete(s.charAt(left))
      left++
    }
    set.add(ch)
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength
}

lengthOfLongestSubstring1('ccccaaqwer123')
