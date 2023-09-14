/**
 * 给你一个二维整数数组 nums ，其中 nums[i] 是由 不同 正整数组成的一个非空数组，按 升序排列 返回一个数组，数组中的每个元素在 nums 所有数组 中都出现过。
 * 输入：nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
 * 输出：[3,4]
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function (nums) {
  let res = nums[0]
  for (let item of nums) {
    res = res.filter((n) => { return item.includes(n) })
  }
  res = Array.from(new Set(res))  //数组去重
  res.sort((a, b) => a - b) //数组排序
  return res
};

let nums = [[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]

fun1(nums)



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let res = nums1
  res = res.filter((n) => { return nums2.includes(n) })
  return res
};

let nums1 = [1, 2, 2, 1], nums2 = [2, 2]

Array.from(new Set(intersection(nums1, nums2)))