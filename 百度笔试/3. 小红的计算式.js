/**
小红在计算的时候经常马虎出错，例如答案是0.4115，然后小红不小心看成了0.115（会忽略小数点后的若干位，不一定连续）。
小红想知道，自己在读错的这些数当中，可能得到的最大值的是多少？
比如说，输入0.411523的时候，输出为0.53，忽略了'411'和'2'。可以证明，这样得到的小数是最大的。
 */
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;


function findMaxWrongAnswer(nums, res) {
  if (nums.length === 0)
    return res
  var max = 0
  var maxIndex = 0
  //找到最大值
  var temp = nums
  for (let i in nums) {
    if (nums[i] > max) {
      max = nums[i]
      maxIndex = i
    }
  }
  res = res + String(max)
  temp = nums.slice(parseInt(maxIndex) + 1, temp.length)
  if (temp.length > 0) {
    return findMaxWrongAnswer(temp, res)
  }
  else {
    console.log(res);
  }

}


void async function () {
  // Write your code here
  line = await readline()
  var answer = line
  var res = '0.'
  var nums = answer.split('.')[1].split('').map(Number)
  findMaxWrongAnswer(nums, res)

}()