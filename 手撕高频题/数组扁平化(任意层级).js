// function myFlat(arr, deep) {
//   if (deep > 0) {
//     return arr.reduce((calc, curr) => {
//       return calc.concat(Array.isArray(curr) ? myFlat(curr, deep - 1) : curr)
//     }, [])
//   } else {
//     return arr
//   }
// }
const arr3 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]]

console.log(myFlat(arr3, 2))

function myFlat(arr, deep) {
  let res = []
  if (deep > 0) {
    res = arr.reduce((calc, curr) => {
      return calc.concat(Array.isArray(curr) ? myFlat(curr, deep - 1) : curr)
    }, [])
  } else {
    res = arr
  }
  return res
}
