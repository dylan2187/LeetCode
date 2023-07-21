function foo(name = 'wangkai') {
  console.log('foo:', this)
}

let obj1 = {
  name: 'obj1',
  foo: foo,
}
let obj2 = {
  name: 'obj2',
  obj1: obj1,
}

// obj2.obj1.foo() //隐式绑定
// //独立调用（默认绑定）
// var temp = obj1.foo
// temp()

function foo1(name, age) {
  console.log('foo1', this)
  console.log(name, age)
}

let aa = foo1.bind('bind', 'wangkai', 20)
aa()

foo1.apply('apply', ['wangkai', 18])
foo1.call('call', 'dylan', 21)

console.log(Object.prototype.toString.call({}))
