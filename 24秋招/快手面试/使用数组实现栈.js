class Stack {
  constructor() {
    this.items = []
  }

  // 入栈操作
  push(element) {
    this.items.push(element)
  }

  // 出栈操作
  pop() {
    if (this.items.length == 0) return 'Underflow'
    return this.items.pop()
  }

  // 查看栈顶元素
  peek() {
    return this.items[this.items.length - 1]
  }

  // 检查栈是否为空
  isEmpty() {
    return this.items.length == 0
  }

  // 清空栈
  clear() {
    this.items = []
  }

  // 返回栈的长度
  size() {
    return this.items.length
  }

  // 打印栈内元素
  printStack() {
    var str = ''
    for (var i = 0; i < this.items.length; i++) str += this.items[i] + ' '
    return str
  }
}

// 使用 Stack 类
var stack = new Stack()

console.log(stack.isEmpty()) // 输出 true

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.printStack()) // 输出 10 20 30
console.log(stack.peek()) // 输出 30
console.log(stack.pop()) // 输出 30
console.log(stack.peek()) // 输出 20
