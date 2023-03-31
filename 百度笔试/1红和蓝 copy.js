
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;


function calculateWeightedSum(n, nums, str) {
  if (n !=== nums.length)
  return 0
  var redIndexes = []
  var blueIndexes = []
  for (let i in str) {
    if (str[i] === 'R') redIndexes.push(i)
    if (str[i] === 'B') blueIndexes.push(i)
  }
  const MOD = 1e9 + 7;
  let sum = 0;

  for (let i = 0; i < redIndexes.length; i++) {
    for (let j = 0; j < blueIndexes.length; j++) {
      const redIndex = redIndexes[i];
      const blueIndex = blueIndexes[j];
      const redNum = nums[redIndex];
      const blueNum = nums[blueIndex];

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
    var res = calculateWeightedSum(n, arr, str)
    console.log(res);
    break
  }
}()

