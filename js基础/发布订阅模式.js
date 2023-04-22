class Subscriber {
  constructor(name) {
    this.name = name
    this.message = []
  }

  getMessage() {
    let msgLen = this.message.length
    console.log(`订阅者${this.name}收到新消息：${this.message[msgLen - 1]}`)
  }
}

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

  notifySubscribers(msg) {
    this.subscribers.forEach(subscriber => {
      subscriber.message.push(msg)
      subscriber.getMessage()
    })
  }
}

const publisher = new Publisher()
const subscriber1 = new Subscriber('dylan')
const subscriber2 = new Subscriber('mona')

publisher.addSubscriber(subscriber1)
publisher.addSubscriber(subscriber2)

publisher.notifySubscribers('hello')

publisher.removeSubscriber(subscriber2)
publisher.notifySubscribers('mona已取消订阅')
