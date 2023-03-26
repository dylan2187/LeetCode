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

function kSort(arr, k) {
  let count = 0;
  let n = arr.length;

  // 进行归并排序，每次将相邻的k个子序列合并
  for (let len = k; len < n; len *= k) {
    for (let i = 0; i < n; i += len) {
      let left = i;
      let right = Math.min(i + len, n);
      let mid = left + Math.floor((right - left) / 2);
      merge(arr, left, mid, right);
    }
  }

  // 定义归并排序中的合并函数
  function merge(arr, left, mid, right) {
    let temp = [];
    let i = left;
    let j = mid;
    let index = 0;
    while (i < mid && j < right) {
      if (arr[i] < arr[j]) {
        temp[index++] = arr[i++];
      } else {
        temp[index++] = arr[j++];
      }
    }
    while (i < mid) {
      temp[index++] = arr[i++];
    }
    while (j < right) {
      temp[index++] = arr[j++];
    }
    for (let k = 0; k < index; k++) {
      arr[left + k] = temp[k];
    }

    // 统计操作次数
    count += Math.floor((right - left) / k);
  }

  // 将前k个元素移到末尾
  for (let i = 0; i < k; i++) {
    for (let j = i; j < n - k + i + 1; j += k) {
      let temp = arr[j];
      arr[j] = arr[j + k];
      arr[j + k] = temp;
    }
  }

  return count;
}

// 测试代码
let arr = [1, 3, 5, 4, 2];
let k = 2;
console.log(kSort(arr, k));  // 输出 2


let line
line = readline()
let groups = parseInt(line)
for (let i in groups) {
  line = readline()
  let [n, k] = line.split(' ').map(item => parseInt(item))
  line = readline()
  let arr = line.split(' ').map(item => parseInt(item))
}


