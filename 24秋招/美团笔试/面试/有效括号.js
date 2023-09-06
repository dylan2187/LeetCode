/*
	题解思路：利用栈结构先进后出，满足有效括号要求
	创建一个对象，保存左括号对应的右括号值
	遍历字符里出现的有效左括号，然会推入栈中
	在遍历右括号时，从栈中从栈尾依次取出，若取出的不等于当前的右括号则不是有效括号
	例如：当输入  "([)]"，
	栈中保存 [ )] ]
	当遍历到 ')' 时，从栈中取出的为 ']' ，不相等，则不是有效括号
	
	注意：
	最后返回判断的是栈内是否为空数组，
	因为可能有输入 '(' 然后栈内还有 ')' 
*/

var isValid = function (s) {
  if (!s) return true
  let len = s.length
  let str = {
    '{': '}',
    '(': ')',
    '[': ']',
  }
  let stack = []
  for (let i = 0; i < len; i++) {
    const cur = s[i]
    if (cur == '(' || cur == '[' || cur == '{') {
      stack.push(str[cur])
      stack
    } else {
      if (!stack.length || stack.pop() !== cur) return false // 若一开始就右括号，则直接为false
    }
  }
  return !stack.length
}
const s = '()[]'
const res = isValid(s)
console.log(res)
