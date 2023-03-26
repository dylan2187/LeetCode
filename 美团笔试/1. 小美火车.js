// 使用JS实现下面这道题。
// 有一个栈，其入栈出栈顺序为先入后出。整数n表示进出栈的元素，数组nums1表示入栈元素顺序，数组nums2表示出栈元素顺序，判断一下入栈和出栈的元素是否符合先入后出。
// 举例：当n = 3， 

//导入包
var __readline = require('readline-sync')
__readline.setDefaultOptions({ prompt: '' })
var readline = __readline.prompt

function isStackOrder(n, nums1, nums2) {
  if (n !== nums1.length || n !== nums2.length) {
    return false;
  }

  let stack = [];
  let j = 0;

  for (let i = 0; i < n; i++) {
    stack.push(nums1[i]);

    while (stack.length > 0 && stack[stack.length - 1] === nums2[j]) {
      stack.pop();
      j++;
    }
  }

  return stack.length === 0;
}

let line

line = readline()
let groups = parseInt(line)
for (let i = 0; i < groups; i++) {
  line = readline()
  let cnt = parseInt(line)
  line = readline()
  let nums1 = line.split(' ').map(item => parseInt(item))
  line = readline()
  let nums2 = line.split(' ').map(item => parseInt(item))
  const res = isStackOrder(cnt, nums1, nums2) ? 'Yes' : 'No'
  console.log(res);
}

function isStackOrder1(cnt, nums1, nums2) {
  if (n !== nums1.length || n !== nums2.length) {
    return false;
  }
  const stack = [];
  let j = 0; // nums2 中待比较的位置
  for (let i = 0; i < n; i++) {
    stack.push(nums1[i]); // 将 nums1 中的元素依次入栈
    while (stack.length > 0 && stack[stack.length - 1] === nums2[j]) {
      // 如果栈顶元素等于 nums2 中对应位置的元素，就将栈顶元素出栈
      stack.pop();
      j++;
    }
  }
  return stack.length === 0; // 如果最终栈为空，则说明 nums1 和 nums2 对应的出栈顺序是符合先入后出的，否则不符合
}
