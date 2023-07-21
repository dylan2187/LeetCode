const arr = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]

function flat(arr) {
  return arr.reduce((prev, curr) => {
    return prev.concat(Array.isArray(curr) ? flat(curr) : curr)
  }, [])
}

console.log(flat(arr))

function flat1(arr) {
  return arr.reduce((prev, curr) => {
    //判断当前元素是不是数组？
    return prev.concat(
      Object.prototype.toString.call(curr) === '[object Array]'
        ? flat1(curr)
        : curr
    )
  }, [])
}

console.log(flat1(arr))
