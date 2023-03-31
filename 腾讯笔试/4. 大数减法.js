//导入包
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function largeSubtraction(num1, num2) {
  let result = '';
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0) {
    let digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    let digit2 = j >= 0 ? parseInt(num2[j]) : 0;
    let diff = digit1 - digit2 - carry;

    if (diff < 0) {
      diff += 10;
      carry = 1;
    } else {
      carry = 0;
    }

    result = diff.toString() + result;
    i--;
    j--;
  }
  result = result.replace(/^0+/, '');

  return result || '0';
}

// let num1 = readline()
// let num2 = readline()


// const result = largeSubtraction(num1, num2);
// console.log(result);

void async function () {
  while (line = await readline()) {
    var num1 = line
    line = await readline()
    var num2 = line
  }
  let res = largeSubtraction(num1, num2)
  console.log(res);
}()