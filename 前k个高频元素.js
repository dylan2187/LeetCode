/**
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 思路：使用哈希表来存储 key：字符 val：频率
var topKFrequent = function (nums, k) {
  let map = new Map()
  let len = nums.length
  for (let i = 0; i < len; i++) {
    if (map.has(nums[i]))
      map.set(nums[i], map.get(nums[i]) + 1)
    else map.set(nums[i], 1)
  }
  let arr = Array.from(map)
  let res = arr.sort((a, b) => b[1] - a[1]).slice(0, k)
  return result = res.map((item) => item[0])
};


let nums = [4, 1, 1, 1, 2, 2, 2, 2, 3], k = 2
console.log(topKFrequent(nums, k));