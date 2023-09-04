function myPush(arr, item) {
  arr[arr.length] = item
  return item
}

const arr = [1, 2, 3]
const res = myPush(arr, 4)
console.log(res)
