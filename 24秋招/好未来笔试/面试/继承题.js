class Person {
  constructor() {
    this.name = 'wangkai'
  }
}

Person.prototype.name = 'dylan'

const man = new Person()

man.name = 'kaizi'
console.log(man.name)
delete man.name
console.log(man.name)
delete man.name
console.log(man.name)
