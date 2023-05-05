function flatten(arr) {
  let res = []
  for (let i of arr) {
    if (Array.isArray(i)) {
      res = res.concat(flatten(i))
    } else res = res.concat(i)
  }
  return res
}

let arr = [1, 2, [3, 4, [5]]]

console.log(flatten(arr))
