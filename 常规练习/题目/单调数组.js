const isSorted = (nums) => {
  return nums.slice(1).every((item, index) => {
    return item >= nums[index]
  })
}

const check = (nums) => {
  return isSorted(nums) || isSorted(nums.reverse())
}

let nums = [5, 1, 0, -1, 0]

console.log(check(nums));