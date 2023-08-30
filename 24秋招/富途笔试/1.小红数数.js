function count(n) {
  let index = 0
  let number = 0
  while (true) {
    let str = number.toString()
    if (index + str.length > n) {
      return str.charAt(n - index - 1)
    }
    index += str.length
    number += 2
  }
}
console.log(getNthDigit(6))
