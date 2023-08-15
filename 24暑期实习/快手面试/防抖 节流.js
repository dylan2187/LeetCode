function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments) //改变this指向
      timer = null
    }, delay)
  }
}

function fun() {
  console.log('hahah')
}

const debounceHandle = debounce(fun, 2000)

debounceHandle()
debounceHandle()
debounceHandle()

function throttle(fun, delay) {
  let timer = null
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      fun.apply(this, arguments)
      timer = null
    }, delay)
  }
}

function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer) //清空定时器
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

function throttle(fn, delay) {
  let timer = null
  return function () {
    if (timer) return //不清空定时器，而是在定时器没到头的时候返回
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
