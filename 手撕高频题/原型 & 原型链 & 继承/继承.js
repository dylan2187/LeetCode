// 原型链继承

// function Parent() {
//   ;(this.name = 'parent1'), (this.play = [1, 2, 3])
// }

// function Child() {
//   this.type = 'child2'
// }

// Child.prototype = new Parent()

// let c1 = new Child()
// let c2 = new Child()
// c1.play.push(5)
// console.log(c2.play)
// 原型链继承的缺陷：改变c1的play属性，会发现c2也跟着发生变化了，这是因为两个实例使用的是同一个原型对象，内存空间是共享的

// 构造函数继承
// function Parent() {
//   this.name = 'parent1'
//   this.drink = () => {
//     console.log('喝水')
//   }
// }
// Parent.prototype.getName = function () {
//   console.log(this.name)
// }

// function Child() {
//   // 借助call调用Parent函数（构造函数）
//   Parent.call(this)
//   this.type = 'child'
// }

// let child = new Child()
// let parent = new Parent()
// child.drink()
// child.getName() //报错
// 构造函数继承 只能继承父类的实例属性和方法，不能继承原型属性或者方法

// 组合继承
// function Parent3() {
//   this.name = 'parent3'
//   this.play = [1, 2, 3]
// }
// Parent3.prototype.getName = function () {
//   console.log(this.name)
// }

// function Child3() {
//   // 第二次调用Child3
//   Parent3.call(this) //构造函数继承
// }
// // 第一次调用Child3
// Child3.prototype = new Parent3() //原型链继承
// // Child3.prototype.constructor = Child3

// let c1 = new Child3()
// let c2 = new Child3()
// c1.getName()
// Parent3 执行了两次，造成了多构造一次的性能开销

// 原型式继承
//借助Object.create方法实现普通对象的继承
//缺陷： 因为Object.create方法实现的是浅拷贝，多个实例的引用类型属性指向相同的内存，存在篡改的可能
let parent4 = {
  name: 'paerent4',
  friends: ['p1', 'p2', 'p3'],
  getName: function () {
    return this.name
  },
}

let person4 = Object.create(parent4)
person4.name = 'dylan'
person4.friends.push('dylan')
console.log(person4)
let person5 = Object.create(parent4)
console.log(person5.friends)

// 寄生式继承

function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delsy)
  }
}

function throttle(fn, delay) {
  let timer = null
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
