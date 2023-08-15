// 请用js实现一个函数findLongestSubarrayBySum(s, arr)，该函数接收一个整数s和一个整数数组arr作为参数。函数需要找到数组中元素和等于s的最长子数组，并返回子数组的起始和结束索引。如果有多个符合条件的子数组，返回起始索引最小的那个。如果没有符合条件的子数组，返回[-1]。

function findLongestSubarrayBySum(s, arr) {
  let maxLength = -1
  let start = 0
  let sum = 0
  let result = [-1]

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end]

    while (sum > s) {
      sum -= arr[start]
      start++
    }

    if (sum === s && end - start + 1 > maxLength) {
      maxLength = end - start + 1
      result = [start + 1, end + 1]
    }
  }

  return result
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const s = 15
const result = findLongestSubarrayBySum(s, arr)
console.log(result) // 输出 [1, 5]
