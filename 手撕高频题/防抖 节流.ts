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

function handleClick() {
  console.log('Button clicked!');
}

const debouncedClickHandler = debounce(handleClick, 500);

// 以下代码会在 500ms 后执行 handleClick 函数
debouncedClickHandler();