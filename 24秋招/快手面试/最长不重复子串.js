//美团和快手都问过
function longestNonRepeatingSubstring(s) {
  let windowCharsMap = {}
  let windowStart = 0
  let maxLength = 0
  let maxLengthStart = 0

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i]

    if (windowCharsMap[endChar] >= windowStart) {
      windowStart = windowCharsMap[endChar] + 1
    }

    windowCharsMap[endChar] = i

    if (i - windowStart + 1 > maxLength) {
      maxLength = i - windowStart + 1
      maxLengthStart = windowStart
    }
  }

  return s.substring(maxLengthStart, maxLengthStart + maxLength)
}

console.log(longestNonRepeatingSubstring('abcabcbb')) // Output: "abc"
