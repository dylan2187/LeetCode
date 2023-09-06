function myPush(arr, item) {
  arr[arr.length] = item
  return item
}

const arr = [1, 3]
const res = arr.push([4, 5])
console.log(res)
