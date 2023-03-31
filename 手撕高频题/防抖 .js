function debounce(fn, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

function handleClick() {
  console.log('Button clicked!')
}

const debouncedClickHandler = debounce(handleClick, 2000)

// 以下代码会在 500ms 后执行 handleClick 函数
debouncedClickHandler()


