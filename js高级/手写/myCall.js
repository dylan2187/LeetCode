//手写call
// 自定义简陋版call方法实现
Function.prototype.myCall = function (context, ...args) {
  // 判断调用对象是不是函数
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  // 如果没有传入上下文对象，则默认为全局对象 window
  context = context || window
  // 创建一个唯一的键名，防止名字冲突
  const fn = Symbol('fn')
  // this是调用myCall的函数，将函数绑定到上下文对象的新属性上
  context[fn] = this
  // 调用绑定的函数，并传入参数
  const result = context[fn](...args)
  // 删除绑定的函数，使对象保持原样
  delete context[fn]
  // 返回函数执行的结果
  return result
}

const o = { name: 'ifer' }
function foo(a, b) {
  console.log(this, a + b) // { name: 'ifer' }
}

foo.myCall(o, 1, 2)
