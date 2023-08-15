// function Parent() {
//   this.name = 'xiaoming'
// }
// Parent.prototype.log = function () {
//   console.log(this.name)
// }
// function Child() {
//   // this.name = 'xiaohong'
// }
// Child.prototype = new Parent()
// // new Parent().log()
// new Child().log()
// // xiaoming
// new Parent().log()

function Parent() {
  this.name = 'parent1'
  this.play = [1, 2, 3]
}
function Child() {
  this.type = 'child2'
}
Child.prototype = new Parent()
var c1 = new Child()
var c2 = new Child()
c1.play.push(5)
console.log(c2.play)
