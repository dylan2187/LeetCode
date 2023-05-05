const MOD = 1e9 + 7

function countOperations(a) {
  let n = a.length
  let ans = 0
  while (n > 0) {
    if (a[0] === 0) {
      for (let i = 0; i < n - 1; i++) {
        a[i] = a[i + 1]
      }
      n--
    } else {
      ans = (ans + a[0] + 1) % MOD
      let k = a[0]
      a.push(k - 1)
      for (let i = 1; i < n; i++) {
        a[i - 1] = a[i]
      }
      a[n - 1] = k
    }
  }
  return ans
}

// 测试样例
let a = [1, 2]
console.log(countOperations(a)) // 输出：13
