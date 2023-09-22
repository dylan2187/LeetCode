function bobelSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        let t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
      }
    }
  }
  return arr
}

let arr = [5, 8, 2, 1, 10, 0]
const res = bobelSort(arr)
console.log(res)
