function fun(n) {
  const arr = []
  let k = 1
  let t = n
  while (t--) {
    for (let i = n; i >= k; i--) {
      arr.push(i)
    }
    k++
  }
  arr
  const result = '[' + arr.join(',') + ']'
  return result
}

let n = 3
let res = fun(3)
console.log(res)
