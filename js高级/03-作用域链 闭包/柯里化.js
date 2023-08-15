const foo = (x) => {
  return (y) => {
    return (z) => {
      return x + y + z
    }
  }
}

const foo1 = (x) => (y) => (z) => {
  return x + y + z
}

const res = foo(1)(2)(3)
console.log(res)
