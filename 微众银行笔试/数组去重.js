function arraySet(arr) {
  const set = new Set()
  return arr.filter(item => {
    if (typeof item === 'object') {
      const str = JSON.stringify(item)
      if (set.has(str)) {
        return false
      } else {
        set.add(str)
        return true
      }
    } else {
      if (set.has(item)) {
        return false
      } else {
        set.add(item)
        return true
      }
    }
  })
}
let input = [123, 'weback', [1, 2, 3], '123', 123, { a: 1 }, { a: 1 }]
let output = arraySet(input)
console.log(output)
