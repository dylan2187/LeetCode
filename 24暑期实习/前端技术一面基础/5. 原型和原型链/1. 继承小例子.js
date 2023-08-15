class People {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    console.log(`my name is ${this.name}`)
  }
}

class Student extends People {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  test() {
    console.log(`学生${this.name}, 考了${this.number}`)
  }
}

const dylan = new Student('dylan', 100)

console.log(Object.prototype.toString.call(dylan))
console.log(typeof null)

console.log(People instanceof Object)

console.log('typeof People', typeof People)
