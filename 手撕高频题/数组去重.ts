const removeDuplicates = (arr) => {
  let set = [...new Set(arr)]
  return set
}

let nums = [1, 2, 2, 2, 333, 3, 3, 4]
removeDuplicates(nums)