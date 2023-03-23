const read_line = require("readline")
const readline = read_line.createInterface({
  input: process.stdin,//标准输入
  output: process.stdout//标准输出
})

let l
while (l = readline()) {

  let [m, n] = l.split(' ').map(item => parseInt(item))
  print(m + n)
}