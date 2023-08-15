// function maxWeight(s, k) {
//   // 计算字母种类
//   const set = new Set(s);
//   const charCount = set.size;

//   // 二分查找
//   let left = 1, right = s.length * charCount;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     let count = 1, currCount = 0;
//     const map = new Map();
//     for (let i = 0; i < s.length; i++) {
//       if (map.has(s[i])) {
//         map.set(s[i], map.get(s[i]) + 1);
//       } else {
//         map.set(s[i], 1);
//         currCount++;
//       }
//       if (currCount > charCount || (i + 1 < s.length && count === k && currCount === charCount)) {
//         count++;
//         map.clear();
//         map.set(s[i], 1);
//         currCount = 1;
//       }
//       if (count > k) break;
//     }
//     if (count <= k) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }

//   return left;
// }

function getMaxWeight(s, k) {
  const count = new Array(26).fill(0);
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  for (let len = 1; len <= n; len++) {
    const dp = new Array(k + 1).fill(0);
    let num = 0, maxNum = 0;
    for (let i = 0; i < n; i++) {
      if (count[s.charCodeAt(i) - 'a'.charCodeAt(0)] === len) {
        num++;
      } else if (count[s.charCodeAt(i) - 'a'.charCodeAt(0)] > len) {
        num++;
        maxNum++;
      }
      if (i >= len) {
        if (count[s.charCodeAt(i - len) - 'a'.charCodeAt(0)] === len) {
          num--;
        } else if (count[s.charCodeAt(i - len) - 'a'.charCodeAt(0)] > len) {
          num--;
          maxNum--;
        }
      }
      if (i >= len - 1 && num <= k) {
        dp[num] = Math.max(dp[num], maxNum * len);
      }
    }
    ans = Math.max(ans, dp[k]);
  }
  return ans;
}

console.log(getMaxWeight("ababbbb", 2)); // 输出 6


// console.log(maxWeight("ababbbb", 2)); // 6
// console.log(maxWeight("ababbbb", 3)); // 5
// console.log(maxWeight("abcdabcdabcdabcd", 4)); // 24
