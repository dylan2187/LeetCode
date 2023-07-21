// 给这个数组去重
const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}]
// 1. 使用set
// const unique = Array.from(new Set(arr))
// const unique = [...new Set(arr)]

const unique = (arr) => {
  const map = new Map()
  const res = []
  for (let i in arr) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      res.push(arr[i])
    }
  }
  return res
}
console.log(unique(arr))
