// 在整数数组 nums 中，是否存在两个下标i和j，使得 nums[i]和 nums[j] 的差的绝对值小于等于t，且满足i和j的差的绝对值也小于等于k。如果存在则返回 true，不存在返回 false
let nums = [1, 2, 3, 1]
let len = nums.length
let k = 3
let t = 0

function judge(nums, k, t) {
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
        return true
      }
    }
  }
  return false
}

const res = judge(len, nums, k, t)
res
