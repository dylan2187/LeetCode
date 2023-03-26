let nums = [1, [2, [3, 4], 5], 6]

const flatten = (arr) => {
  let res = []
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(flatten(item))
    }
    else res.push(item)
  }
  return res
}

flatten(nums)