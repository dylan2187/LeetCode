function throttle(fun, delay) {
  var timer = null
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      fun.apply(this, arguments)
      timer = null
    }, delay);
  }
}
function debounce(fun, delay) {
  var timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(this, arguments)
      timer = null
    }, delay);
  }
}