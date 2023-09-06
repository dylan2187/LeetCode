Function.prototype.myApply = function (context, args) {
  //1. 确保调用的是函数
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  //2. 获取context 并确保context是对象类型
  context = context === null || context === undefined ? window : Object(context)

  //3. context中是否有fn重名属性
  const fn = Symbol('fn')
  context.fn = this
  const result = context.fn(args)
  delete fn
  return result
}

Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    return new TypeError('error')
  }
  context = context === null || context === undefined ? window : Object(context)
  const fn = Symbol('fn')
  context.fn = this
  return function (...innerArgs) {
    context.fn(...[...args, ...innerArgs])
  }
}

function foo() {
  console.log(this.name)
}

const obj = { name: 'wangkai' }

const foo1 = foo.myBind(obj)
foo1()
