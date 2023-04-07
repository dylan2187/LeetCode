function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  const table = new Array(128).fill(-1);
  for (let i = 0, j = 0; j < s.length; ++j) {
    i = Math.max(i, table[s.charCodeAt(j)] + 1);
    maxLength = Math.max(maxLength, j - i + 1);
    table[s.charCodeAt(j)] = j;
  }
  return maxLength;
}

const str = 'abcdadcdigkfl'
console.log(lengthOfLongestSubstring(str))

public static int lengthOfLongestSubstring(String s) {
  // 记录无重复最长子串的长度
  int maxLength = 0;
  // 创建128长度的ASCII字符的哈希表，并初始化为-1
  int[] table = new int[128];
  Arrays.fill(table, -1);
  // 左指针i，右指针j，以右指针j为循环条件
  for (int i = 0, j = 0; j < s.length(); ++j) {
    // 检查左指针i是否需要因为存在重复字母而右移
    i = Math.max(i, table[s.charAt(j)] + 1);
    // 更新无重复最长子串的长度
    maxLength = Math.max(maxLength, j - i + 1);
    // 把右指针j遍历到的字母的索引值写入哈希表中
    table[s.charAt(j)] = j;
  }
  return maxLength;
}