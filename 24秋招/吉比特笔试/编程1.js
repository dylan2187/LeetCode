function minJump(nums) {
  let max = 0,
    end = 0,
    jumpSteps = 0

  for (let i = 0; i < nums.length - 1; i++) {
    max = Math.max(max, i + nums[i])
    if (i === end) {
      end = max
      jumpSteps++
    }
  }

  return jumpSteps
}

console.log(minJump([2, 3, 1, 1, 4])) // 输出：2
