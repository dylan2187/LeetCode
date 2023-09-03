function foo() {
  let a = 1
  return function () {
    console.log(a++)
  }
}

const f1 = foo()
const f2 = foo()
f1()
f2()

const f = foo()
f()
f()
