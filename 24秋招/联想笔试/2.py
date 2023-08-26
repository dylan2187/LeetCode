class TreeNode:
    def __init__(self, val):
        self.val = val
        self.children = []

def foo(n: int, edgeList: list) -> TreeNode:

    nodeList = [TreeNode(i) for i in range(1, n+1)]
    for i, f in enumerate(edgeList, start=1):
        nodeList[f-1].children.append(nodeList[i])
    return nodeList[0]

def dfs(node: TreeNode, depthList: dict) -> int:

    if not node.children: 
        depthList[node.val] = 1
        return 1

    for child in node.children: 
        if node.val not in depthList:
            depthList[node.val] = 0
        depthList[node.val] += dfs(child, depthList)
        
    return depthList[node.val]

if __name__ == "__main__":

    n, Q = map(int, input().split())
    edgeList = list(map(int, input().split()))
    queries1 = list(map(int, input().split()))
    queries2 = list(map(int, input().split()))

    root = foo(n, edgeList)
    depthList = dict()
    dfs(root, depthList)

    res = 0
    for a, b in zip(queries1, queries2):
        res ^= depthList[a] * depthList[b]

    print(res)
