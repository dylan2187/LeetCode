class MyPromise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onFulfilled = null
    this.onRejected = null

    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        if (this.onFulfilled) {
          this.onFulfilled(this.value)
        }
      }
    }

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        if (this.onRejected) {
          this.onRejected(this.reason)
        }
      }
    }

    try {
      executor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value)
    } else if (this.state === 'rejected') {
      onRejected(this.reason)
    } else {
      this.onFulfilled = onFulfilled
      this.onRejected = onRejected
    }

    // For chaining
    return this
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }
}

let p = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve(10), 1000)
})

p.then((value) => {
  console.log(value) // 输出：10
  return value + 20
})
  .then((value) => {
    console.log(value) // 输出：30
    return value + 30
  })
  .then((value) => {
    console.log(value) // 输出：60
  })
  .catch((error) => {
    console.log('Error: ', error)
  })
