// 现在有n个人坐成一个圈，也就是说第n个人的下一个是第1个人。每个人背上贴了一个大写字母。这个字母可能是A也可能是B。你的任务是从第一个人开始，顺次向后计数，每遇到一个贴着字母A的人就计数一次。第k次计数到A后停止。现在问你总共需要数多少个人才能停止。保证至少有一个人背上贴的是A。

function countPeople(n, k, str) {
  let count = 0
  let i = 0
  while (k > 0) {
    if (str[i % n] === 'A') {
      k--
    }
    i++
    count++
  }
  return count
}

const [n, k] = readline()
  .split(' ')
  .map((item) => parseInt(item))
const str = readline()

const res = countPeople(n, k, str)
console.log(res)
