// 手动实现Promise能让你更好的理解Javascript中的异步编程。
// 请你使用 javascript 实现一个 MyPromise 类，它可以：
// 1。 有一个 then() 方法，这个方法的第一个参数是一个函数，该函数将在 promise resolved 且接收到结果后执行；这个方法的第二个参数也是一个函数，该函数将在 promise rejected 且接收到 error 信息后执行
// 2。 then()方法应该能够被链式调用
// 3。有一个 catch() 方法，这个方法只处理 error 信息
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

class MyPromise {
  // 构造函数
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING

    const resolve = (value) => {
      if (this.status !== PROMISE_STATUS_PENDING) return // ⭐
      this.status = PROMISE_STATUS_FULFILLED
      this.value = value
      queueMicrotask(() => {
        this.onFulfilled(this.value)
      })
    }

    const reject = (reason) => {
      if (this.status !== PROMISE_STATUS_PENDING) return //⭐
      this.status = PROMISE_STATUS_REJECTED
      this.reason = reason
      queueMicrotask(() => {
        this.onRejected(this.reason)
      })
    }

    executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }
}
