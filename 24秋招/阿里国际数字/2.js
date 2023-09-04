function maxDivisibleNum(nums) {
  nums.sort((a, b) => b - a)

  let sum = nums.reduce((a, b) => a + b, 0)
  while (sum % 3 !== 0 && nums.length > 0) {
    let min = Math.min(...nums)
    let idx = nums.indexOf(min)
    nums.splice(idx, 1)
    sum -= min
  }

  if (sum % 3 === 0 && nums.includes(0)) {
    let result = nums.join('')
    return parseInt(result, 10)
  }

  return -1
}
