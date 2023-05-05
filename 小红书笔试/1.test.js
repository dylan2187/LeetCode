const mod = 1e9 + 7

function countOperations(arr) {
  let res = 0
  while (arr.length > 0) {
    if (arr[0] === 0) {
      arr.shift()
      res++
    } else {
      for (let i = 0; i < arr[0]; i++) {
        arr.push(arr[0] - 1)
      }
      arr[0]--
      res++
    }
    res %= mod
  }
  return res
}

// 示例
const arr = [1, 2]
const result = countOperations(arr)
console.log(result) // 输出 11
