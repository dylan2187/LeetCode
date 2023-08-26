function isMatchingBrackets(str) {
  let stack = [] // 创建一个空栈

  for (let i = 0; i < str.length; i++) {
    let char = str[i]

    // 如果遇到左括号，将其压入栈
    if (char === '{' || char === '[' || char === '(') {
      stack.push(char)
    }
    // 如果遇到右括号
    else if (char === '}' || char === ']' || char === ')') {
      // 如果栈为空或栈顶元素与当前右括号不匹配，返回false
      if (stack.length === 0 || !isMatching(stack[stack.length - 1], char)) {
        return false
      }
      // 弹出栈顶元素
      stack.pop()
    }
  }

  // 遍历完字符串后，如果栈为空，返回true，否则返回false
  return stack.length === 0
}

// 判断左右括号是否匹配的辅助函数
function isMatching(left, right) {
  return (
    (left === '{' && right === '}') ||
    (left === '[' && right === ']') ||
    (left === '(' && right === ')')
  )
}

let str = readline()
const res = isMatchingBrackets(str)
console.log(res)

console.log(isMatchingBrackets('{[()]}')) // true
console.log(isMatchingBrackets('{[(])}')) // false
console.log(isMatchingBrackets('{[()}')) // false
