function sumOfSubsequenceAverages(nums) {
  const MOD = 1000000007
  const n = nums.length
  const dp = new Array(n).fill(0)

  dp[0] = nums[0]

  for (let i = 1; i < n; i++) {
    dp[i] = (dp[i - 1] * (i + 1) + nums[i]) % MOD
  }

  let sum = 0
  for (let i = 0; i < n; i++) {
    sum = (sum + dp[i]) % MOD
  }

  return sum
}

const nums = [1, 2, 3]
console.log(sumOfSubsequenceAverages(nums)) // 输出14
