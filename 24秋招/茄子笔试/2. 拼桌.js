使用js完成下面这道题：
某餐馆有n张桌子，每张桌子可以最多容纳ai个人。有 m批客人，每批客人的人数为bi，预计消费金额为ci。
在不允许拼桌的情况下，请问总预计消费金额最大是多少？
输入参数：
桌子数量n
客人批次m
每张桌子可以容纳的最大人数的数组arr
第i批客人的人数和预计消费金额的二维数组customers

function maxProfit(n, m, arr, customers) {
  // 按照桌子的最大容纳人数排序
  arr.sort((a, b) => a - b);

  // 按照客人的预计消费金额排序
  customers.sort((a, b) => b[1] - a[1]);

  let totalProfit = 0;
  for (let i = 0; i < m; i++) {
      let size = customers[i][0];
      let profit = customers[i][1];
      let index = arr.findIndex(table => table >= size);
      if (index !== -1) {
          totalProfit += profit;
          arr.splice(index, 1); // 移除已经分配的桌子
      }
  }
  return totalProfit;
}





let [n,m] = (readline()).split(' ').map(item=>parseInt(item))
let arr = (readline()).split(' ').map(item=>parseInt(item))
let customers = []
for(let i = 0;i<m;i++){
  let customer = (readline()).split(' ').map(item=>parseInt(item))
  customers.push(customer)
}

const res = maxProfit(n, m, arr, customers)
console.log(res);
// let n = 4;
// let m = 4;
// let arr = [4, 2, 3, 1];
// let customers = [
//   [2, 100],
//   [3, 200],
//   [1, 50],
//   [4, 400]
// ];
// console.log(maxProfit(n, m, arr, customers)); // 输出：700