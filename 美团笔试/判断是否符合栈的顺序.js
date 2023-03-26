function isStackOrder(n, nums1, nums2) {
  if (n !== nums1.length || n !== nums2.length) {
    return false;
  }

  let stack = [];
  let j = 0;

  for (let i = 0; i < n; i++) {
    stack.push(nums1[i]);
    stack
    while (stack.length > 0 && stack[stack.length - 1] === nums2[j]) {
      stack.pop();
      j++;
    }
  }

  return stack.length === 0;
}

let n = 3
let nums1 = [1, 2, 3]
let nums2 = [1, 2, 3]
isStackOrder(n, nums1, nums2)