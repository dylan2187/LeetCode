function solve(n, k, arr) {
  let map = new Map()
  for (let i = 0; i < k; i++) {
    map.set(arr[i], i)
  }

  for (let i = 0; i <= n - k; i++) {
    let maxVal = Math.max(...map.keys())
    let minVal = Math.min(...map.keys())

    if (maxVal !== arr[i + k - 1] || minVal !== arr[i]) {
      let idxMax = map.get(maxVal)
      let idxMin = map.get(minVal)

      // 交换两个元素
      ;[arr[idxMax], arr[idxMin]] = [arr[idxMin], arr[idxMax]]

      return {
        status: 'YES',
        swaps: [{ u: idxMax + 1, v: idxMin + 1 }],
      }
    }

    // 移动窗口
    map.delete(arr[i])
    if (i + k < n) {
      map.set(arr[i + k], i + k)
    }
  }

  return {
    status: 'NO',
    swaps: [],
  }
}

let n = 5,
  k = 4,
  arr = [1, 5, 3, 4, 2]
console.log(solve(n, k, arr))
// let [n, k] = (await readline()).split(' ').map((item) => parseInt(item))
// let arr = (await readline()).split(' ').map((item) => parseInt(item))
