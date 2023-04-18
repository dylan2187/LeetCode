class Human {
  constructor(name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

class Chinese extends Human {
  constructor(name, age) {
    super(name)
    this.age = age
  }
  getAge() {
    return this.age
  }
}
typeof Chinese

let wk = new Chinese('wangkai', 18)

wk.__proto__.age //隐式原型
Chinese.prototype.getName //显示原型
Chinese.__proto__

Object.prototype.__proto__
