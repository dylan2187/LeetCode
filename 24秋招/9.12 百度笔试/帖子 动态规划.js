function maxAttraction(n, a, b) {
  // Calculate the differences and sort them
  let differences = []
  for (let i = 0; i < n; i++) {
    differences.push(a[i] - b[i])
  }
  // differences.sort((a, b) => Math.abs(b) - Math.abs(a))
  let positive = differences.filter((item) => {
    return item >= 0
  })
  let nagetive = differences.filter((item) => {
    return item < 0
  })
  let max = positive.reduce((calc, curr) => {
    return calc + curr
  }, 0)
  let min = nagetive.reduce((calc, curr) => {
    return calc + curr
  }, 0)
  min = Math.abs(min)
  return Math.max(max, min)

  // Calculate the maximum attraction
  // let attraction = 0
  // for (let diff of differences) {
  //   attraction += diff
  // }

  // return Math.abs(attraction)
}

// Test case
let n = 4
let a = [4, 2, 1, 1]
let b = [2, 1, 4, 4]
console.log(maxAttraction(n, a, b)) // Output: 6

// let n = parseInt(await readline())
// let a = (await readline()).split(' ').map((item) => parseInt(item))
// let b = (await readline()).split(' ').map((item) => parseInt(item))
// console.log(maxAttractiveness(n, a, b))
