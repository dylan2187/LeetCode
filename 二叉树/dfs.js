//前序遍历:中左右
var preorderTraversal = function (root) {
  let res = [];
  const dfs = function (root) {
    if (root === null) return;
    //先序遍历所以从父节点开始
    res.push(root.val);
    //递归左子树
    dfs(root.left);
    //递归右子树
    dfs(root.right);
  }
  //只使用一个参数 使用闭包进行存储结果
  dfs(root);
  return res;
};



function preoder(root) {
  if (root === null) return
  let res = []

}

