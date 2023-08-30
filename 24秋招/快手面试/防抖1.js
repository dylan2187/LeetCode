function debounce(fn, delay) {
  let timer = null
  return function (...argus) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, argus)
      timer = null
    }, delay)
  }
}

let cnt = 0
const debouncedFunction = debounce(() => {
  console.log(`the function has been called ${++cnt} times`)
}, 2000)

for (let i = 0; i < 10; i++) {
  debouncedFunction()
}
