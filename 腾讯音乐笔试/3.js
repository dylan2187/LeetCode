/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function valueOfTree(root) {
  if (!root) {
    return null
  }
  const leftValue = countValue(root.left)
  const rightValue = countValue(root.right)

  const value = countZero(leftValue * rightValue * root.val)
  root.val = value
  root.left = valueOfTree(root.left)
  root.right = valueOfTree(root.right)
  return root
}

function countZero(num) {
  let count = 0
  while (num > 0 && num % 10 === 0) {
    count++
    num = Math.floor(num / 10)
  }
  return count
}

function countValue(node) {
  if (!node) {
    return 1
  }
  const leftValue = countValue(node.left)
  const rightValue = countValue(node.right)
  return node.val * leftValue * rightValue
}

/**
 * 非递归的广度优先搜索算法，用于计算每个节点的价值
 * @param {TreeNode} root 给定的二叉树根节点
 * @return {TreeNode} 修改后的二叉树根节点
 */
function valueOfTree(root) {
  // 定义队列和Map
  const queue = []
  const map = new Map()
  // 初始化队列和Map
  queue.push(root)
  map.set(root, {
    count: 0,
    zeros: 0,
    min: Infinity
  })
  // 遍历队列中的节点
  while (queue.length > 0) {
    const node = queue.shift()
    // 计算左右子树的各个属性值
    let leftCount = 0,
      leftZeros = 0,
      leftMin = Infinity
    let rightCount = 0,
      rightZeros = 0,
      rightMin = Infinity
    if (node.left) {
      let leftProps = map.get(node.left)
      if (!leftProps) {
        leftProps = {
          count: 0,
          zeros: 0,
          min: Infinity
        }
        queue.push(node.left)
        map.set(node.left, leftProps)
      }
      leftCount = leftProps.count
      leftZeros = leftProps.zeros
      leftMin = leftProps.min
    }
    if (node.right) {
      let rightProps = map.get(node.right)
      if (!rightProps) {
        rightProps = {
          count: 0,
          zeros: 0,
          min: Infinity
        }
        queue.push(node.right)
        map.set(node.right, rightProps)
      }
      rightCount = rightProps.count
      rightZeros = rightProps.zeros
      rightMin = rightProps.min
    }
    // 计算当前节点的各个属性值
    const count = 1 + leftCount + rightCount
    const zeros = leftZeros + rightZeros
    const min = Math.min(node.val, leftMin, rightMin)
    // 计算当前节点的价值
    const value = countZero(node.val * leftMin * rightMin, zeros)
    // 更新Map中当前节点的属性值和价值
    map.set(node, {
      count,
      zeros,
      min,
      value
    })
  }
  // 更新二叉树中每个节点的值
  queue.push(root)
  while (queue.length > 0) {
    const node = queue.shift()
    const props = map.get(node)
    node.val = props.value
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return root
}

/**
 * 计算给定数num的末尾0的数量
 * @param {number} num 给定的数
 * @return {number} num的末尾0的数量
 */
var countZero = function (num, extraZeros = 0) {
  let count = 0
  while (num !== 0 && num % 10 === 0) {
    count++
    num = Math.floor(num / 10)
  }
  return count + extraZeros
}
