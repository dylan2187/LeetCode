function canSplitInto3Factors(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      let factor1 = i
      let factor2 = num / i
      if (factor2 > 1 && Number.isInteger(factor2)) {
        for (let j = 2; j <= Math.sqrt(factor2); j++) {
          if (factor2 % j === 0) {
            let factor3 = j
            if (factor3 > 1 && Number.isInteger(factor3)) {
              return true
            }
          }
        }
      }
    }
  }
  return false
}

// Examples
console.log(canSplitInto3Factors(12)) // true, can be split into 2 * 2 * 3
console.log(canSplitInto3Factors(18)) // false, cannot be split into 3 factors > 1
