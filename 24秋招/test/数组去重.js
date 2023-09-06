function deleteDumplicates(nums) {
  let res = []
  let set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i])) {
      set.add(nums[i])
      res.push(nums[i])
    }
  }
  return res
}
const arr = [1, 2, 3, 3, 4, 4, 5]
const res = deleteDumplicates(arr)
console.log(res)
