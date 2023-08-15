function Person() {
  this.sayHi = () => {
    console.log('im person')
  }
}

function Student() {
  this.sayHello = () => {
    console.log('im student')
  }
}

Student.prototype = new Person()

const s1 = new Student()

console.log(s1.__proto__.__proto__ === Person.prototype)

function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
