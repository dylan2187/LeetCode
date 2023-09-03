function deleteChar(arr, val) {
  let len = str.length
  for (let i = 0; i < len; i++) {
    if (str[i] === val) {
      str.splice(i, 1)
      len--
      i--
    }
  }
  return str
}

const str = [1, 2, 3, 3, 5]
const val = 3
const res = deleteChar(str, val)
console.log(res)
