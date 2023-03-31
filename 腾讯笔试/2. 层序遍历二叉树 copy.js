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


var arr1 = [1, 2, 3]
findNode(2, arr1, 1)


function findNode(level, order, val) {
  const n = order.length;
  let left = 0, right = n - 1;
  let width = Math.pow(2, level - 1);
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (order[mid] === val) {
      // 节点存在
      console.log("YES");
      // 判断是否为叶子节点
      if (2 * (mid - left) + 1 >= width || mid >= n - width) {
        console.log("LEAF");
      } else {
        // 输出左右儿子的权值
        console.log(order[2 * (mid - left) + 1] + ' ' + order[2 * (mid - left) + 2]);
      }
      return;
    } else if (order[mid] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // 节点不存在
  console.log("NO");
}




var arr = [1, 2, 3]
findNode(2, arr, 1)



function searchTreeNode(level, order, target) {
  let left = 0, right = (2 ** level) - 2; // 计算完全二叉树节点总数
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // 计算中间节点的索引
    if (order[mid] === target) { // 如果目标值就是中间节点的权值，返回查询结果
      if (mid * 2 + 1 > order.length - 1) { // 如果中间节点是叶子节点，返回 LEAF
        return ["YES", "LEAF"];
      } else { // 否则返回左右儿子节点的权值
        return ["YES", order[mid * 2 + 1], order[mid * 2 + 2]];
      }
    } else if (order[mid] > target) { // 如果目标值小于中间节点的权值，在左子树中继续查找
      right = mid - 1;
    } else { // 否则在右子树中查找
      left = mid + 1;
    }
  }
  return ["NO"]; // 没有找到目标节点，返回 NO
}
