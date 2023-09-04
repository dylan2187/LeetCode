function getMaxNumber(nums) {
  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 3 !== 0) {
    return -1
  }

  nums.sort((a, b) => b - a)

  if (nums[nums.length - 1] % 2 !== 0) {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] % 2 === 0) {
        const temp = nums[i]
        nums[i] = nums[nums.length - 1]
        nums[nums.length - 1] = temp
        break
      }
    }
  }

  if (nums[nums.length - 1] % 2 !== 0) {
    return -1
  }

  return parseInt(nums.join(''))
}

console.log(getMaxNumber([0, 1, 2, 3, 4])) // 输出：4320
