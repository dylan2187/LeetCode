/**

给出一个数组。你需要求出按顺序对其进行一系列区间操作后最终所得的数组。
操作有三种：
1. 将下标在L到R之间的元素全部或上X。
2. 将下标在L到R之间的元素全部与上X。
3. 将下标在L到R之间的元素全部设为X。
输入描述：
第一行有一个正整数N(1<=N<=100000)，代表数组的长度。
第二行有N个非负整数，范围在0到2^20-1之间，代表数组中的元素。
第三行有一个正整数M(1<=M<=100000)，代表操作次数。
第四行有M个正整数，代表M次操作中的区间左端点L。
第五行有M个正整数，代表M次操作中的区间右端点R。
第六行是一个长度为M的字符串，`|`代表操作1，`&`代表操作2，`=`代表操作3。
第七行有M个正整数，代表M次操作中的参数X。
输出描述：
在一行中输出N个数，代表所有操作按顺序完成后最终所得的数组。
样例输入：
4
5 4 7 4
4
1 2 3 2
4 3 4 2
=|&=
8 3 6 2
样例输出：
8 2 2 0
11222

 */
// var __readline = require('readline-sync')
// __readline.setDefaultOptions({ prompt: '' })
// var readline = __readline.prompt

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n, a, m, l, r, op, x;
let ans = [];

function setAll(l, r, x) {
  for (let i = l; i <= r; i++) {
    ans[i] = x;
  }
}

function orAll(l, r, x) {
  for (let i = l; i <= r; i++) {
    ans[i] |= x;
  }
}

function andAll(l, r, x) {
  for (let i = l; i <= r; i++) {
    ans[i] &= x;
  }
}

function solve() {
  ans = a.slice();
  for (let i = 0; i < m; i++) {
    if (op[i] === '|') {
      orAll(l[i] - 1, r[i] - 1, x[i]);
    } else if (op[i] === '&') {
      andAll(l[i] - 1, r[i] - 1, x[i]);
    } else {
      setAll(l[i] - 1, r[i] - 1, x[i]);
    }
  }
  console.log(ans.join(' '));
}

let inputCount = 0;
rl.on('line', function (input) {
  inputCount++;
  if (inputCount === 1) {
    n = parseInt(input);
  } else if (inputCount === 2) {
    a = input.split(' ').map(Number);
  } else if (inputCount === 3) {
    m = parseInt(input);
    l = new Array(m);
    r = new Array(m);
    op = new Array(m);
    x = new Array(m);
  } else if (inputCount === 4) {
    l = input.split(' ').map(Number);
  } else if (inputCount === 5) {
    r = input.split(' ').map(Number);
  } else if (inputCount === 6) {
    op = input.split('');
  } else if (inputCount === 7) {
    x = input.split(' ').map(Number);
    solve();
    rl.close();
  }
});
