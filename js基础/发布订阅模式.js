// 订阅者
function Subscriber(name) {
  this.name = name
  this.message = []
}

Subscriber.prototype.getMessage = function () {
  console.log(`${this.name}收到新消息：${this.message}`)
}

// 发布者
function Publisher() {
  this.subscribers = []
}

Publisher.prototype.addSubscriber = function (subscriber) {
  this.subscribers.push(subscriber)
}

Publisher.prototype.removeSubscriber = function (subscriber) {
  var index = this.subscribers.indexOf(subscriber)
  if (index !== -1) {
    this.subscribers.splice(index, 1)
  }
}

Publisher.prototype.notifySubscribers = function (message) {
  this.subscribers.forEach(subscriber => {
    subscriber.message.push(message)
    subscriber.getMessage()
  })
}

// 测试
const publisher = new Publisher()
const subscriber1 = new Subscriber('John')
const subscriber2 = new Subscriber('Mike')

publisher.addSubscriber(subscriber1)
publisher.addSubscriber(subscriber2)

publisher.notifySubscribers('我们要开始学习JavaScript了')
publisher.notifySubscribers('发布订阅模式真的很有用')

publisher.removeSubscriber(subscriber2)
publisher.notifySubscribers('Mike已取消订阅')

//代码中包含了订阅者和发布者两个类，订阅者通过getMessage()方法接收发布者发送的消息。发布者有添加和删除订阅者的方法，以及通知所有订阅者的方法，当有新的消息时，发布者会将消息推送给所有订阅者。在测试代码中，我们创建了两个订阅者，并添加到发布者的订阅者列表中，之后模拟了发布者发送消息的过程，以及订阅者退出订阅的过程。
