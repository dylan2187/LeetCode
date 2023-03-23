//导入包
var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var read_line = __readline.prompt


const fun = (str) => {
  str = str.toLowerCase(str)
  let len = str.length
  let arr = str.split('')
  let sucai = ['a', 'l', 'i']
  let cnt = 0
  for (let c of arr) {
    if (c === sucai[cnt]) {
      continue
    }
    else {
      if (c === sucai[cnt + 1]) {
        if (cnt <= 3) {
          cnt++
          continue
        }
      }
      else return false
    }
  }
  return true
}


// let str = 'AaaaLLLlLLLiiIi'
let line
while ((line = read_line()) != '') {
  const res = fun(line)
  console.log(res);
}
