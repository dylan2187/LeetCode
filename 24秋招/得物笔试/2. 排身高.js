// 导演在组织进行大运会开幕式的排练，其中一个环节是需要参演人员围成一个环形。演出人员站成了一圈，出于美观度的考虑，导演不希望某一个演员身边的其他人比他低太多或者高太多。
// 现在给出n个参演人员的身高，问在他们站成一圈时，相邻演员的身高差的最大值至少是多少？请你帮忙计算。
// 样例：输入2 1 1 3 2 输出：1
// 获取相邻演员的身高差的最大值
// function findMaxHeightDifference(heights) {
//   // 排序
//   heights.sort((a, b) => a - b)

//   let maxDifference = 0
//   const n = heights.length

//   // 创建新数组并将演员按照身高从小到大放入其中
//   const arrangedHeights = []
//   for (let i = 0; i < n; i++) {
//     arrangedHeights[i] = heights[i]
//   }

//   // 计算相邻演员的身高差并更新最大差值
//   for (let i = 0; i < n - 1; i++) {
//     const difference = arrangedHeights[i + 1] - arrangedHeights[i]
//     if (difference > maxDifference) {
//       maxDifference = difference
//     }
//   }

//   return maxDifference
// }

// let cnt = parseInt(readline())
// let nums = readline()
//   .split(' ')
//   .map((item) => parseInt(item))

// const res = findMaxHeightDifference(nums)
// console.log(res)

// 测试样例
const heights = [2, 1, 1, 3, 2]
const maxDifference = findMaxHeightDifference(heights.length, heights)
console.log('相邻演员的身高差的最大值至少是：', maxDifference)

function findMaxHeightDifference(n, nums) {
  // 对数组排序
  nums.sort((a, b) => a - b)
  nums
  // 双指针处理
  var arr = new Array(n)
  var left = 0
  var right = n - 1
  // 原数组指针
  var i = 0
  while (left <= right && i < n) {
    if (left === right) {
      arr[left] = nums[i]
      break
    }
    arr[left] = nums[i]
    arr[right] = nums[i + 1]
    // 指针移动
    left++
    right--
    i += 2
  }
  // 统计差值
  var maxDiff = Math.abs(arr[0] - arr[n - 1])
  for (var j = 0; j < n - 1; j++) {
    var curDiff = Math.abs(arr[j] - arr[j + 1])
    maxDiff = Math.max(maxDiff, curDiff)
  }
  return maxDiff
}
