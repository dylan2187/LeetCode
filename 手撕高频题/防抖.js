function debounce(fn, delay) {
  let timer = null;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
}

function debounce(fn, delay) {
  let timer = null;
  return function () {
    // const context = this;
    // const args = arguments;
    clearTimeout(timer);
    let firstClick = !timer
    if (firstClick) {
      fn()
    }
    timer = setTimeout(() => {
      // fn.apply(context, args);
      // fn()
      timer = null
    }, delay);
  };
}


function handleClick() {
  console.log('Button clicked!');
}

const debouncedClickHandler = debounce(handleClick, 2000);

// 以下代码会在 500ms 后执行 handleClick 函数
debouncedClickHandler();
setTimeout(() => {
  debouncedClickHandler()
}, 1000);