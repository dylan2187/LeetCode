/** 
 * 使用JS实现下面这道题：
现在有一棵满二叉树，数组order用层序遍历的顺序保存这棵满二叉树节点的权值，每个节点的权值都不相同。现在写一个函数，输入参数是这个二叉树的层数、数组order以及要查询的权值。
函数的输出为：
1。这个节点是否存在？ 
2。这个节点的左儿子和右儿子的权值是多少？
①如果存在权值为x的节点，则先输出一个字符串“YES“。
若该节点为叶子节点，则下一行输出一个字符串“LEAE“。
若该节点不是叶子节点，则下一行输出两个正整数，分别代表该节点的左儿子和右儿子的权值。
②如果不存在权值为x的节点，则直接输出一个字符串“NO“
*/

const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

function findNode(level, order, val) {
  const n = order.length;
  let i = 0;
  while (i < n) {
    let width = Math.pow(2, level - 1);
    let j = i;
    while (j < i + width && j < n) {
      if (order[j] === val) {
        // 节点存在
        console.log("YES");
        // 判断是否为叶子节点
        if (2 * (j - i) + 1 >= width || j === n - 1) {
          console.log("LEAF");
        } else {
          // 输出左右儿子的权值
          console.log(order[2 * (j - i) + 1] + ' ' + order[2 * (j - i) + 2]);
        }
        return;
      }
      j++;
    }
    i += width;
  }
  // 节点不存在
  console.log("NO");
}



void async function () {
  while (line = await readline()) {
    var n = parseInt(line)  //二叉树的层数
    line = await readline()
    var order = line.split(' ').map(item => parseInt(item)) //层序遍历
    line = await readline()
    var qs = parseInt(line)  //询问的次数
    if (qs) {
      break
    }
  }
  while (line = await readline()) {
    // line = await readline()
    var q = parseInt(line)
    findNode(n, order, q)
  }
}()


// var arr1 = [1, 2, 3]
// findNode(2, arr1, 1)






