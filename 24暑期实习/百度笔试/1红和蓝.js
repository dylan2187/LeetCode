/**
 * 
 * 使用js完成下面这道题：
小红拿到了一个数组，其中一些数字被染成红色，另外一些数字被染成蓝色。
小红准备在其中选出两个数，选出的两个数的乘积为选择的方案权值。只有当选择的两个数是一红一蓝时，该方案才是合法的。
小红想知道，所有合法的选数方案的权值之和是多少？答案请对10^9+7取模。
 */


const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;


// var arr = [1, 2, 3]
// var str = 'RBR'


function redAndBlue(arr, str) {
  var redArr = []
  var blueArr = []
  for (let i in str) {
    //把arr分成红蓝两个数组
    if (str[i] === 'R') redArr.push(arr[i])
    if (str[i] === 'B') blueArr.push(arr[i])
  }
  var res = 0
  for (let i of redArr) {
    for (let j of blueArr) {
      res += i * j
    }
  }
  const MOD = 1e9 + 7
  return res % MOD
}

// redAndBlue(arr, str)


function calculateWeightedSum(n, nums, str) {
  const MOD = 1e9 + 7;
  let sum = 0;

  for (let i = 0; i < redIndexes.length; i++) {
    for (let j = 0; j < blueIndexes.length; j++) {
      const redIndex = redIndexes[i];
      const blueIndex = blueIndexes[j];
      const redNum = nums[redIndex];
      const blueNum = nums[blueIndex];

      if (redNum * blueNum > 0) {
        continue; // 不符合要求的情况
      }

      const weight = (redNum * blueNum) % MOD;
      sum = (sum + weight) % MOD;
    }
  }

  return sum;
}









void async function () {
  // Write your code here
  while (line = await readline()) {
    var n = parseInt(line);
    line = await readline()
    var arr = line.split(' ').map(item => parseInt(item))
    line = await readline()
    var str = line
    var res = redAndBlue(arr, str)
    console.log(res);
  }
}()