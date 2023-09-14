// 一共有n级台阶，每次爬1级或2级，有多少种办法？
function climbWays(n) {
  let arr = Array(n).fill(0)
  arr[0] = 1
  arr[1] = 2
  if (n === 1) return 1
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1]
  }
  // arr
  return arr[arr.length - 1]
}

climbWays(4)
