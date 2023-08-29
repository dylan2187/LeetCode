function myQueue() {
  this.elements = []
}

myQueue.prototype.enqueue = function (element) {
  this.elements.push(element)
}

myQueue.prototype.dequeue = function () {
  //出队
  return this.elements.shift()
}

myQueue.prototype.length = function () {
  return this.elements.length
}

myQueue.prototype.isEmpty = function () {
  return !this.elements.length
}

myQueue.prototype.peek = function () {
  console.log()
  return this.length ? this.elements[0] : undefined
}

var q = new myQueue()
q.enqueue('element1')
q.enqueue('element2')
console.log(q.length()) // 输出：2
console.log(q.peek()) // 输出："element1"
console.log(q.dequeue()) // 输出："element1"
console.log(q.peek()) // 输出："element2"
