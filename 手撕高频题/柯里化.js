function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}


function add(a, b, c) {
  arguments
  let args = Array.prototype.slice.call(arguments)
  let sum = args.reduce((prev, cur) => {
    return prev + cur
  })
  sum

  return a + b + c
}

const curriedAdd = curry(add)

curriedAdd(1, 2, 3)

// console.log(curriedAdd(1)(2)(3));


const obj = {
  '0': 18,
  '1': 20
}
let arr = Array.prototype.slice.call(obj)
arr


let arr1 = [1, 2, 3, 4]
let sum = arr1.reduce((prev, curr, index) => {
  console.log('prev: ', prev, 'curr: ', curr);
  return prev + curr

}, 0)
sum

function addition(n) {
  console.log('n: ', n);
  if (!n) return res
  res = n
  return function (n) {
    return addition(res + n)
  }
  // return res
}

addition(1)(1)()