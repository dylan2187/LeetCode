// function maxLengthSubsequence(n, m, arr) {
//   let left = 1,
//     right = n
//   let new_arr = arr.map((x) => x - m)
//   while (left < right) {
//     let mid = Math.floor((left + right + 1) / 2)
//     if (checkArray(mid, n, new_arr)) {
//       left = mid
//     } else {
//       right = mid - 1
//     }
//   }
//   return left
// }

// function checkArray(mid, n, arr) {
//   let prefixSum = new Array(n + 1).fill(0)
//   let minPrefixSum = new Array(n + 1).fill(0)

//   for (let i = 1; i <= n; i++) {
//     prefixSum[i] = prefixSum[i - 1] + arr[i - 1]
//   }
//   minPrefixSum[mid] = prefixSum[mid]

//   for (let i = mid + 1; i <= n; i++) {
//     minPrefixSum[i] = Math.min(minPrefixSum[i - 1], prefixSum[i - mid])
//     if (prefixSum[i] >= minPrefixSum[i - 1]) {
//       return true
//     }
//   }
//   return false
// }

// // const [m,n] = (await readline()).split(" ").map((item) => parseInt(item));
// // const arr = (await readline()).split(" ").map((item) => parseInt(item));
// // const result = maxLengthSubsequence(n, m, arr)
// // console.log(result)

// function maxLengthSubsequence1(n, m, arr) {
//   arr.sort((a, b) => b - a)
//   let sum = 0
//   for (let i = 0; i < n; i++) {
//     sum += arr[i]
//     sum
//   }
// }

// // 示例用法
// const n = 5
// const m = 5
// const arr = [9, 1, 9, 1, 9]
// const result = maxLengthSubsequence1(n, m, arr)
// console.log(result) // 输出 4
function longestSubsequence(n, m, arr) {
  arr = arr.map((val) => val - m) // 预处理数组
  let dp = Array(n + 1)
    .fill()
    .map(() => Array(n + 1).fill(-Infinity)) // 初始化dp数组
  dp[0][0] = 0
  for (let i = 1; i <= n; i++) {
    dp[i][0] = 0
    for (let j = 1; j <= i; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + arr[i - 1])
    }
  }
  for (let len = n; len >= 0; len--) {
    if (dp[n][len] >= 0) return len
  }
  return 0
}

console.log(longestSubsequence(5, 5, [9, 1, 9, 1, 9])) // 输出4
