function canMakeMonotonic(n, arr) {
  // 检查是否是单调不减的数组
  function isMonotonic(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false
      }
    }
    return true
  }

  // 尝试通过交换操作使数组变成单调不减的
  for (let i = 0; i < n; i++) {
    let j = (i + 2) % n // 计算交换的下标

    // 进行交换
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

    // 检查交换后的数组是否是单调不减的
    if (isMonotonic(arr)) {
      return true
    }

    // 恢复数组原始状态
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  return false
}

// 测试样例
console.log(canMakeMonotonic(4, [1, 4, 3, 2])) // 输出: true
console.log(canMakeMonotonic(4, [4, 3, 2, 1])) // 输出: false
