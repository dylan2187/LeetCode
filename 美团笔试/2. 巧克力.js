/*
小美明天要去春游了。她非常喜欢吃巧克力，希望能够带尽可能多的巧克力在春游的路上吃。她现在有n个巧克力，很巧的是她所有的巧克力都是厚度一样的正方形的巧克力板，这n个巧克力板的边长分别为a1, a2,..., an。因为都是厚度一致的正方形巧克力板，我们认为第 i 个巧克力的重量为ai的平方。小美现在准备挑选一个合适大小的包来装尽可能多的巧克力板，她十分需要你的帮助来在明天之前准备完成，请你帮帮她
第一行两个整数n和m，表示小美的巧克力数量和小美的询问数量
第二行n个整数a1, a2,..., an，表示n块正方形巧克力板的边长。注意你不能将巧克力板进行拆分。
第三行m个整数q1, q2,..., qm，第 i 个整数qi表示询问：如果小美选择一个能装qi重量的包，最多能装多少块巧克力板？（不考虑体积影响，我们认为只要质量满足要求，巧克力板总能塞进包里）

使用JS实现下面这道题。
现在有n块巧克力，数组nums表示它们的边长，它们的重量是边长的平方。现在有一个包，用q来表示包能装下巧克力的重量，想要往包里装数量尽可能多的巧克力。输出包能装下巧克力的数量。
*/
//导入包
var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var readline = __readline.prompt


// while ((line = read_line()) != '') {
//   let arr = line.split(' ');
//   let m = parseInt(arr[0]);
//   let n = parseInt(arr[1]);
//   let sum = getSum(m, n);
//   console.log(sum);
// }

function findMaxNums(q, nums) {
  nums.sort((a, b) => a - b);
  let left = 1;
  let right = nums.length;
  let res = 0;

  while (left <= right) {
    // const mid = Math.floor((left + right) / 2);
    let mid = left + right >> 1
    if (checkQuality(mid, q, nums)) {
      res = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
}

function checkQuality(k, q, nums) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    const weight = nums[i] * nums[i];
    if (weight > q - sum) {
      return false;
    }
    sum += weight;
  }
  return true;
}

let line
line = readline()
let [num1, num2] = line.split(' ').map(item => parseInt(item))
line = readline()
const arr1 = line.split(' ').map(item => parseInt(item))
line = readline()
const arr2 = line.split(' ').map(item => parseInt(item))
let res = []
for (let q of arr2) {
  res.push(findMaxNums(q, arr1));
}
console.log(res.join(' '));


