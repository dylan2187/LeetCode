// 接口可以在面向对象编程中表示为行为的抽象
interface Speakable {
  name: string
  // ":" 前面的是函数签名，用来约束函数的参数
  // ":" 后面的用来约束函数的返回值
  speak(words: string): void
}

interface Speakable2 {
  age: number
}

class Dog implements Speakable, Speakable2 {
  name!: string
  age = 18
  speak(words: string) {
    console.log(words)
  }
}

let dog = new Dog()
dog.speak('汪汪汪')

function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
