// 两个字符串s1 s2，判断s1的排列是否出现在s2中，比如说s1=ab，它的排列是ab ba，只要两者其中一个出现在s2中就返回true
var permutation = function (s) {
  const rec = [], vis = [];
  const n = s.length;
  const arr = Array.from(s).sort();
  const perm = [];
  const backtrack = (arr, i, n, perm) => {
    if (i === n) {
      rec.push(perm.toString());
      return;
    }
    for (let j = 0; j < n; j++) {
      if (vis[j] || (j > 0 && !vis[j - 1] && arr[j - 1] === arr[j])) {
        continue;
      }
      vis[j] = true;
      perm.push(arr[j]);
      backtrack(arr, i + 1, n, perm);
      perm.pop();
      vis[j] = false;
    }
  }

  backtrack(arr, 0, n, perm);
  const size = rec.length;
  const recArr = new Array(size).fill(0);
  for (let i = 0; i < size; i++) {
    recArr[i] = rec[i].split(',').join('');
  }
  return recArr;
};

const isInclude = (s1, s2) => {
  let arr = permutation(s1)
  for (let item of arr) {
    if (s2.includes(item)) return true
  }
  return false

}
let s1 = 'abd'
let s2 = 'bac'
isInclude(s1, s2)