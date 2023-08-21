// 假设有一组数字，需要找出其中任意三个数字之和等于一个目标值。请实现一个函数 find Triplet(arr, target) 来解决这个问题，其中 arr 为一个整数数组，target 为目标数字。
// 1。 函数返回值为一个长度为3 的整数数组，表示找到的三个数字。
// 2。 如果没有找到任何三个数字之和等于目标值，函数应该返回一个空数组。
function findTriplet(arr, target) {
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === target) {
          return [arr[i], arr[j], arr[k]]
        }
      }
    }
  }
  return []
}

const arr = [1, 2, 3, -6, 0, 4]
const target = 0
const result = findTriplet(arr, target)
console.log(result)
