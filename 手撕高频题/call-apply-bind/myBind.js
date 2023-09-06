Function.prototype.mybind = function (context, ...args) {
  //1. 确保调用的是函数
  if (typeof this !== 'function') {
    throw new TypeError('error')
  }
  //2. 确保有context 且是个对象
  context = context === null || context === undefined ? window : Object(context)
  //3. context上有没有fn重名的属性
  const fn = Symbol('fn')
  context.fn = this
  return function (...innerArgs) {
    context.fn(...[...args, ...innerArgs])
  }
}
function foo(name, height) {
  this.msg = 'hello'
  console.log(this.msg + name + height + this.num)
}

const obj = {
  num: 11,
}

const newFoo = foo.bind(obj, 'wangkai')
newFoo(18)
