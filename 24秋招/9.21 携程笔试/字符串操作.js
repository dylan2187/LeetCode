// 使用js做这道题：
// 小红拿到了一个字符串s。她可以进行任意次以下操作：
// 选择字符串中的一个字母ch1和任意一个字母ch2 (ch2 可以不在字符串中出现)，将字符串s中的所有ch1变成 ch2。
// 小红想知道，自己能否通过一些操作将字符串s变成t？
// 样例：
// 输入ab ba输出Yes
// 输入abc aaa输出Yes
// 输入aaaa abcd 输出No

function canTransform(s, t) {
  if (s.length !== t.length) {
    return 'No'
  }
  let map = {}
  let used = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] && map[s[i]] !== t[i]) {
      return 'No'
    }
    if (!map[s[i]] && used[t[i]]) {
      return 'No'
    }
    map[s[i]] = t[i]
    used[t[i]] = true
  }
  return 'Yes'
}

console.log(canTransform('ab', 'ba')) // outputs: 'Yes'
console.log(canTransform('abc', 'aaa')) // outputs: 'Yes'
console.log(canTransform('aaaa', 'abcd')) // outputs: 'No'
