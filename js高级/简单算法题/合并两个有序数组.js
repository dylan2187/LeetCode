let nums1 = [1, 2, 3, 0, 0, 0]
let m = 3
let nums2 = [2, 5, 6]
let n = 3
function merge(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
  return nums1
  // return nums1.sort((a, b) => {
  //   return a - b
  // })
}

console.log(merge(nums1, m, nums2, n))
