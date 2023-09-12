class cls extends Array {
  func() {
    console.log(1)
  }
}
const son = new cls(1, 2, 3)
const arr1 = son.filter((item) => item >= 2)
const arr2 = arr1.filter((item) => item >= 3)
arr1.func()
arr2.func()
console.log(arr2.constructor === cls)
