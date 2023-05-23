function Parent() {
  this.name = 'xiaoming'
}
Parent.prototype.log = function () {
  console.log(this.name)
}
function Child() {
  // this.name = 'xiaohong'
}
Child.prototype = new Parent()
// new Parent().log()
new Child().log()
// xiaoming
new Parent().log()
