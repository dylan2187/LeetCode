// 以下是使用class类实现发布订阅模式的代码：

// 订阅者
class Subscriber {
  constructor(name) {
    this.name = name
    this.messages = []
  }

  getMessage() {
    console.log(`${this.name}收到新消息：${this.messages[this.messages.length - 1]}`)
  }
}

// 发布者
class Publisher {
  constructor() {
    this.subscribers = []
  }

  addSubscriber(subscriber) {
    this.subscribers.push(subscriber)
  }

  removeSubscriber(subscriber) {
    const index = this.subscribers.indexOf(subscriber)
    if (index !== -1) {
      this.subscribers.splice(index, 1)
    }
  }

  notifySubscribers(message) {
    this.subscribers.forEach(subscriber => {
      subscriber.messages.push(message)
      subscriber.getMessage()
    })
  }
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
// 通过使用ES6 class类，我们的代码变得更加简洁易读。在类的构造函数中定义对象的属性，而在方法中执行对应的操作。订阅者和发布者的方法定义都比较清晰，没有什么需要特别强调的。在测试中，我们创建了两个订阅者，并添加到发布者的订阅者列表中，之后模拟了发布者发送消息的过程，并在其中一个订阅者退订后再次发送了一条消息。

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
