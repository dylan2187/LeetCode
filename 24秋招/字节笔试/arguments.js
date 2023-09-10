function func(a, b = 2) {
  console.log(arguments.length)
  a = 3
  b = 3
  console.log(a === arguments[0])
  console.log(b === arguments[1])
}
func(1)
