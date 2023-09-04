function calculateIncrement(numOfItems, numArray) {
  // 排序
  numArray.sort((a, b) => a - b)
  let uniqueNumSet = new Set()
  uniqueNumSet.add(numArray[0])
  let incrementCounter = 0
  for (let i = 1; i < numOfItems; i++) {
    let currentItem = numArray[i]
    while (uniqueNumSet.has(currentItem)) {
      currentItem += 1
      incrementCounter++
    }
    numArray[i] = currentItem
    uniqueNumSet.add(numArray[i])
  }
  return incrementCounter
}

console.log(solution(n, nums))

let n = parseInt(readline())
let nums = readline()
  .split(' ')
  .map((item) => parseInt(item))
