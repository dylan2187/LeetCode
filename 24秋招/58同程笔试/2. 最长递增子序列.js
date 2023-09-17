// 在Vue3.0版本中，针对核心dif算法进行了升级，其中有个重要的算法就是使用了最长递增子序列来优化diff的成本。那么现在请你来试着实现这个核心算法。
// 举例说明：
// 现在有一个整数数组nums，找到其中的最长严格递增 (即两个相等的项不算递增）的子序列的长度。子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7]是数组[0,3,1,6,2,2,7]的子序列。
// 示例
// 输入：nums = [3,6,4,7,0,7,4,5,8,9]
// 输出：5
// 解释：最长的递增子序列有三个[3,4,5,8,9], [0,4,5,8,9], [3,6,7,8,9]，因此长度为5

function lengthOfLIS(nums) {
  if (nums.length === 0) {
    return 0
  }
  let dp = new Array(nums.length).fill(1)
  let maxLen = 1
  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    maxLen = Math.max(maxLen, dp[i])
  }
  return maxLen
}

console.log(lengthOfLIS([3, 6, 4, 7, 0, 7, 4, 5, 8, 9])) // 5
