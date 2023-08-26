function compareSize(size1, size2) {
  let mapping = {
    S: 1,
    M: 2,
    L: 3,
    XS: 0,
    XXS: -1,
    XL: 4,
    XXL: 5,
    XXXL: 6,
    // and so on
  }

  let num1 = size1.replace(/[^\d]/g, '')
  let type1 = size1.replace(/\d+/g, '')
  let value1 = mapping[type1] + Number(num1)

  let num2 = size2.replace(/[^\d]/g, '')
  let type2 = size2.replace(/\d+/g, '')
  let value2 = mapping[type2] + Number(num2)

  if (value1 > value2) {
    return 1
  } else if (value1 < value2) {
    return -1
  } else {
    return 0
  }
}

// Example usage
console.log(compareSize('M', 'L')) // -1
console.log(compareSize('XXL', 'XXXL')) // -1
console.log(compareSize('4XS', 'XS')) // 1
