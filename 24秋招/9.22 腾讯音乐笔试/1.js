function countWays(t) {
  const mod = 1e9 + 7
  const n = t.length
  const dp = new Array(n + 1).fill(0)
  const sum = new Array(n + 1).fill(0)
  const last = new Array(26).fill(-1)

  // Base case: there's only one way to generate an empty string
  dp[0] = 1
  sum[0] = 1

  for (let i = 1; i <= n; i++) {
    // Operation 1: Add any letter to the end of s
    dp[i] = sum[i - 1]

    // Operation 2: Copy a continuous substring of s with a length of not less than 2
    if (last[t.charCodeAt(i - 1) - 'a'.charCodeAt(0)] !== -1) {
      dp[i] =
        (dp[i] - sum[last[t.charCodeAt(i - 1) - 'a'.charCodeAt(0)] - 1] + mod) %
        mod
    }

    // Update sum and last
    sum[i] = (sum[i - 1] + dp[i]) % mod
    last[t.charCodeAt(i - 1) - 'a'.charCodeAt(0)] = i
  }

  return sum[n]
}

console.log(countWays('ababa')) // Output: 3
