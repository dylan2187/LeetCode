console.log(Object.__proto__ === Function.prototype)

Function.prototype.__proto__ === Object.prototype

let [a, b, c, d, e] = 'world'
a
b

![]
!{}
!''
!NaN
!-1
Symbol(1) === Symbol(1)
NaN === NaN
Object.is(+0, -0)
Object.is(NaN, 0 / 0)

const fun = function () {}
typeof {}

if (!NaN) {
  console.log(1)
}
parseInt(NaN)
Number(NaN)
!NaN
!-1
Symbol(1) === Symbol(1)
Symbol(1)
let sym = Symbol(1)
typeof sym
Object.prototype.toString.call(sym)

let s = Symbol()

let obj = {
  s: true, // 使用[]接受s作为键
}

console.log('sssss', obj.s) // undefined  - 点号不能使用s作为键
obj[s] // true
