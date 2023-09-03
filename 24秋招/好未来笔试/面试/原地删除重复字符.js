//数组去重 -> 找不同的
// 遍历数组，如果快指针 j 指向的元素和慢指针 i 指向的元素不相等，那么就将 i 前进一步，并将 j 指向的元素赋值给新的 i 位置。同时 len 也会增加，代表去重后的数组长度。

//思路 双指针
function removeDuplicates(arr) {
  //慢指针i，快指针j
  for (var i = 0, j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return arr.slice(0, i + 1)
}

const arr = [1, 2, 2, 2, 3, 5]
const res = removeDuplicates(arr)
console.log(res)
