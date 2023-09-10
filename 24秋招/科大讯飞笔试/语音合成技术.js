function strzip(str) {
  let res = ''
  let cnt = 0
  let len = str.length
  let i
  let j
  for (i = j = 0; i < len; ) {
    // cnt = 0
    if (str[i] === str[j]) {
      cnt++
      i++
      if (i === len - 1) {
        cnt++
        res += cnt
        res += str[j]
      }
    } else {
      //遇到不相同的

      res += cnt
      res += str[j]
      j = i
      cnt = 0
    }
  }
  return res
}

const str = await readline()
const res = strzip(str)
console.log(res)

const str = '112233444555'
const res = strzip(str)
console.log(res)
