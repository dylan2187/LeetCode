function jumpingWays(nums) {
  const MOD = 1e9 + 7
  const n = nums.length
  let jumpWays = new Array(n).fill(0)
  jumpWays[0] = 1

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[j] % nums[i] === 0) {
        jumpWays[j] = (jumpWays[j] + jumpWays[i]) % MOD
      }
    }
  }

  return jumpWays[n - 1]
}
const n = parseInt(await readline())
const nums = (await readline()).split(' ').map((item) => {
  return parseInt(item)
})
const res = jumpingWays(nums)
console.log(res)

const nums = [1, 2, 2, 3, 4]
console.log(jumpingWays(nums)) // Output: 4
