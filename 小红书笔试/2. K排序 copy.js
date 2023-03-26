/**

在算法中，有各种各样的排序算法，例如归并排序，冒泡排序，快速排序等等。本题中，我们会使用一种新的排序算法：K排序。
K排序算法描述如下：首先，算法需要按照某种规则选择该数列上至多K个位置，将其对应的数抽出来，其他的数都往左对齐，之后这K个数排好序之后依次放在原数列末尾。以上过程算作一次操作。
你的任务是：对于给定的数列，你需要计算出最少需要多少次上述操作，使得整个数列从小到大排好序？
例如，对于数列[1,3,5,4,2]，当K=2时可以选择数字2和3，之后数列变成[1,5,4,2,3]，再选择数字5和4，之后数列变成[1,2,3,4,5]，输出最少的操作次数是2。

 */
//导入包
var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var readline = __readline.prompt

function kSort(arr, k, l) {
  let cnt = 0;
  for (let i = 0; i < l; i++) {
    let minIndex = i;
    for (let j = i + 1; j < l && j <= i + k; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      let temp = arr[minIndex];
      for (let j = minIndex; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      arr[i] = temp;
      cnt++;
    }
  }
  return cnt;
}

let line
line = readline()
let groups = parseInt(line)
let res = []
for (let i = 0; i < groups; i++) {
  line = readline()
  let [n, k] = line.split(' ').map(item => parseInt(item))
  line = readline()
  let arr = line.split(' ').map(item => parseInt(item))
  let ans = kSort(arr, k, arr.length)
  res.push(ans)
}
for (let item of res) {
  console.log(item);
}


