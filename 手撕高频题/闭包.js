function createCounter() {
  let counter = 0
  return function () {
    counter++
    console.log(counter)
  }
}

let counter = createCounter()
counter()
counter()

function Person(name, age) {
  this.name = name
  this.age = age
}

Person.prototype.sayHello = function () {
  console.log(`hello, my name is ${this.name}, I'm ${this.age} years old`)
}

const dylan = new Person('dylan', 12)
dylan.sayHello()
