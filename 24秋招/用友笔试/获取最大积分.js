// 给定一个非负整数数组nums，假定最开始处于下标为0的位置，数组里面的每个元素代表下一跳能够跳跃的最大长度，且跳到该位置即可获得当前元素积分，如果可以跳到数组最后一个位置，请你求出跳跃路径中所能获得的最多的积分。
// 如果能够跳到数组最后一个位置，才能计算所获得的积分，否则积分值为-1
// 样例：输入[2,4,2, 1,0,100]，首先位于nums[O]=2，然后可以跳1步，到nums[1]=4的位置，积分=2+4=6，再跳到 nums[5]=100的位置，积分=6+100=106这样保证既能跳到数组最后一个元素，又能保证获取的积分最多，输出结果106

function maxJumpScore(nums) {
  const dp = new Array(nums.length).fill(-1)
  dp[0] = nums[0]

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        dp[i] = Math.max(dp[i], dp[j] + nums[i])
      }
    }
  }

  return dp[nums.length - 1]
}

// const nums = [2, 4, 2, 1, 0, 100]
const nums = [2, 4, 0, 2, 0, 8]
const result = maxJumpScore(nums)
console.log(result)
