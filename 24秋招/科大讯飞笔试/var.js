var a = 2
function foo() {
  console.log(a)
}
function bar() {
  var a = 3
  console.log(a)
  foo()
}
bar()
