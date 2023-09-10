function isVlaid(s) {
  let str = {
    '{': '}',
    '(': ')',
    '[': ']',
  }

  let stack = []
  for (let char of s) {
    //遍历字符串s
    if (Object.keys(str).includes(char)) {
      stack.push(char)
    } else if (!stack.length || str[stack.pop()] !== char) {
      return false
    }
  }
  return stack.length === 0
}
const str = '()'
console.log(isVlaid(str))
