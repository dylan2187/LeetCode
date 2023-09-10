// 给定一个长度为n的数组arr，其中一个数字出现了b次，其它数字要么出现 a 次，要么不出现。现在请你找到这个出现b次的数字。

function calculateCount(arr, n, a, b) {
  let map = new Map()
  for (let i of arr) {
    //遍历arr
    if (!map.has(i)) {
      map.set(i, 1)
    } else {
      map.set(i, map.get(i) + 1)
    }
  }
  let res
  map.forEach((value, key) => {
    // console.log(value ===b);
    if (value === b) res = key
  })
  return res
}

let [n, a, b] = (await readline()).split(' ').map((item) => parseInt(item))
let arr = (await readline()).split(' ').map((item) => parseInt(item))
const res = calculateCount(arr, n, a, b)
console.log(res)

let n = 4
let a = 1
let b = 2
let arr = [4, 9, 3, 4]
const res = calculateCount(arr, n, a, b)
console.log(res)
