let set = new Set(['red', 'green', 'blue', 'blue'])

// for (let item of set.entries()) {
//   console.log(item)
// }
// set.forEach((key, val) => {
//   console.log(key, val)
// })

//set用于数组的去重
// let arr = [3, 5, 2, 2, 5, 5]
// let unique = [...new Set(arr)]
// console.log(unique)

// 字符串去重
// let str = '352255'
// let s1 = [...new Set(str)].join('')
// console.log(s1)

// //set求交集
// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);
// let union = new Set([...a, ...b]) //并集

// let intersect = [...a].filter(x => b.has(x))  //交集

// let difference = [...a].filter(x => !b.has(x))  //差集

// const m = new Map();

// m.set('edition', 6);
// m.set(262, 'standard');
// m.set(undefined, 'nah');
// m.set('undefined', 'undefined')

// for (let [key, value] of m) {
//   console.log(key + ':' + value);
// }
