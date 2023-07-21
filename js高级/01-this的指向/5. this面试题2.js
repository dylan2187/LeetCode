var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function () {
    console.log(this.name)
  },
  foo2: () => {
    console.log(this.name)
  },
  foo3: function () {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function () {
    return () => {
      console.log(this.name)
    }
  },
}

var person2 = { name: 'person2' }

console.log('-----------')
person1.foo1() //隐式绑定 -> person1
person1.foo1.call(person2) //显式绑定 -> person2

console.log('-----------')
person1.foo2() //箭头函数的this查找方式，找上层作用域 ->window
person1.foo2.call(person2) //window

console.log('-----------')
// 注意返回的是一个普通函数
person1.foo3()() //注意： 独立调用，默认绑定 window
person1.foo3.call(person2)() //独立调用，默认绑定 window
person1.foo3().call(person2) //显式绑定 person2

console.log('-----------')
person1.foo4()() //箭头函数的this查找，向上级作用域(foo4) -> person1
person1.foo4.call(person2)() //person2 同上
person1.foo4().call(person2) //同上，箭头函数没有this，所以call无效 -> person1
