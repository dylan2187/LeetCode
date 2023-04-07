

if (typeof (a) && (-true) + (+undefined) + '') {
  console.log('通过');
} else {
  console.log('没通过');
}
var a
undefined

if (typeof (undefined)) { console.log('hello'); }
if ((-true)) { console.log('hello'); }
if (Number(undefined) + 1) { console.log('hello'); }

if ((-true) + (+undefined) + '') { console.log('hello'); }

// (-true)
typeof ('' + (+undefined))



function ass() {

}

typeof ass

typeof null


let arr = []
let obj = {}
obj instanceof Array


const typeArr = Object.prototype.toString.call([])
const typeObj = Object.prototype.toString.call({})
console.log(typeArr);
console.log(typeObj);




let aa = (-true)
aa
typeof aa
let bb = (+undefined)
bb


aa + bb
let cc = ''

console.log(cc + bb);
console.log(typeof (cc + bb));