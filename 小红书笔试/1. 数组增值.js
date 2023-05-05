var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var readline = __readline.prompt

function func(a) {
  let count = 0
  let mod = 1e9 + 7

  while (a.length > 0) {
    if (a[0] == 0) {
      a.shift()
      count++
    } else {
      for (let i = 0; i < a[0]; i++) {
        a.push(a[0] - 1)
      }
      a[0]--
      count++
    }
  }
  count %= mod

  return count
}

// let arr = [1, 2]
// console.log(func(arr))

let line
line = readline()
let len = parseInt(line)
line = readline()
let arr = line.split(' ')
for (let i = 0; i < arr.length; i++) {
  arr[i] = parseInt(arr[i])
}
let res = func(arr)
console.log(res)
