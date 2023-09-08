function isValid(str) {
  if (str.length % 2 !== 0) return false
  let stack = []
  for (let char of str) {
    if (char === '(') {
      stack.push(char)
    } else {
      //看栈的最后一个元素是否与之匹配
      if (stack[stack.length - 1] === '(' && char === ')') {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

let str = '()()()(()'
const res = isValid(str)
console.log(res)
