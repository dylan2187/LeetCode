function maxTimeToExit(students) {
  // 计算每个学生到走廊的时间，并记录离门口的距离
  let times = students.map(([x, y]) => [Math.abs(x), y])
  // 按照到达走廊的时间排序，如果时间相同，那么离门口远的学生排在前面
  times.sort(([x1, y1], [x2, y2]) => x1 - x2 || y2 - y1)
  // 让所有的学生依次走到门口，记录下最后一个学生走到门口的时间
  let maxTime = 0
  for (let [x, y] of times) {
    maxTime = Math.max(maxTime + 1, x + y)
  }
  return maxTime
}

console.log(
  maxTimeToExit([
    [3, 4],
    [-3, 4],
    [2, 3],
  ])
) // 输出：8

// const n = parseInt(readline())
// const students = []
// for (let i = 0; i < n; i++) {
//   const arr = readline()
//     .split(' ')
//     .map((item) => parseInt(item))
//   students.push(arr)
// }
// const res = getTimeToExit(students)
// console.log(res)

// 测试函数
// const students = [
//   [3, 4],
//   [-3, 4],
//   [2, 3],
// ]
// console.log(getTimeToExit(students)) // 输出： 4
