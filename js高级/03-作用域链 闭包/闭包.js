function createAdder(count) {
  return function adder(num) {
    return num + count
  }
}

const adder5 = createAdder(5)

const res = adder5(100)
console.log(res)
