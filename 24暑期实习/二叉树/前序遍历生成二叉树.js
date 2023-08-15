function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }

  const root = new TreeNode(preorder[0]);

  const rootIndex = inorder.indexOf(preorder[0]);

  const inLeft = inorder.slice(0, rootIndex);
  const preLeft = preorder.slice(1, 1 + inLeft.length);

  const inRight = inorder.slice(rootIndex + 1);
  const preRight = preorder.slice(1 + inLeft.length);

  root.left = buildTree(preLeft, inLeft);
  root.right = buildTree(preRight, inRight);

  return root;
}
