// 原型链继承

function Parent() {
  ;(this.name = 'parent1'), (this.play = [1, 2, 3])
}

function Child() {
  this.type = 'child2'
}

Child.prototype = new Parent()

let c1 = new Child()
let c2 = new Child()
c1.play.push(5)
console.log(c2.play)
// class 类函数继承
