// __proto__是对象的隐式原型
// 找一个对象的属性或方法的时候，如果在当前的对象上找不到，就会去它的隐式原型上找
// 如愿原型上找不到，就去原型的原型上去找，这样以来呢，就形成了一个链式的结构，就叫做原型链
// dylan.__proto__ === Student.prototype
// 隐式原型             显式原型

class Person {
  constructor(name, type) {
    this.name = name
    this.type1 = type
  }
  introduce() {
    console.log(`我叫${this.name}`)
  }
}

class Student extends Person {
  constructor(name, score) {
    super(name)
    this.score = score
  }

  showScore() {
    console.log(`我考了${this.score}分。`)
  }
}

const dylan = new Student('dylan', 100)
console.log(dylan.__proto__)
console.log(Student.prototype)

console.log({} instanceof Array)
