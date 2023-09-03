// function outer() {
//   var a = 5
//   function inner() {
//     console.log(a)
//     var a = 10
//   }
//   return inner
// }

// var innerfun = outer()
// innerfun()

if (nums.length === 1) {
  return nums[0]
}

for (let i = 0; i < nums.length - 1; i++) {
  if (nums[i] <= nums[i + 1]) {
    nums[i + 1] = nums[i] + nums[i + 1]
    nums.splice(i, 1) // 删除已经合并的元素
    i--
  }
}

return Math.max(...nums)
