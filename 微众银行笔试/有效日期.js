// 求两个日期中间的有效日期（要考虑闰年）
// 示例：
// 输入：2020-9-29~2020-10-3
// 输出：['2020-9-29','2020-9-30','2020-10-1','2020-10-2','2020-10-3']

function getValidDate(dateRange) {
  const [start, end] = dateRange.split('~')
  const startDate = new Date(start)
  const endDate = new Date(end)
  let result = []

  while (startDate <= endDate) {
    const y = startDate.getFullYear()
    const m = startDate.getMonth() + 1
    const d = startDate.getDate()
    const item = `${y}-${m}-${d}`
    result.push(item)
    startDate.setDate(startDate.getDate() + 1)
  }

  return result
}

let start = '2022-2-28'
let end = '2022-3-3'
let dateRange = '2022-2-28~2022-3-3'
let res = getValidDate(dateRange)
console.log(res)
