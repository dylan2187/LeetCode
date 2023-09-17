// 假设我们要去一个地点，距离为h步，我们可以有2个技能可以使用
// 正常走路：每次可以走1步。
// 跳跃：每次可以走3步。
// 但是“跳跃“不可以连续使用，也就是说2次跳跃之间至少会有一次”正常走路°。
// 现在你需要写一个函数，返回到达这个地点最少需要释放多少次技能？（最后一步可以刚好到达这个地点或者超过这个地点都是可以的）

function minSkillCount(h) {
  let count = 0
  while (h > 0) {
    if (h >= 4) {
      h -= 4
      count += 2
    } else if (h >= 2) {
      h -= 3
      count++
    } else {
      h -= 1
      count++
    }
  }
  return count
}

console.log(minSkillCount(5)) // Output: 3
console.log(minSkillCount(9)) // Output: 3
static int minSkillCount(int h) {
  int count = 0;
  while (h > 0) {
      if (h >= 4) {
          h -= 4;
          count += 2;
      } else if (h >= 2) {
          h -= 3;
          count++;
      } else {
          h -= 1;
          count++;
      }
  }
  return count;
}