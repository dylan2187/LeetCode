import java.util.*;

/*
 * public class TreeNode {
 *   int val = 0;
 *   TreeNode left = null;
 *   TreeNode right = null;
 *   public TreeNode(int val) {
 *     this.val = val;
 *   }
 * }
 */

public class Solution {
    /**
     * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
     *
     *
     * @param trees TreeNode类一维数组
     * @return int整型
     */
    private int maxDepth;
    private int count;

    public int cntOfMethods (TreeNode[] trees) {
        int n = trees.length;
        if (n == 1) {
            return 1;
        }
        int ans = 0;
        // 统计每棵树的叶子节点数量
        long[] leafNums = new long[n];
        for (int i = 0; i < n; i++) {
            long leafNum = countLeafs(trees[i]);
            ans += leafNum * 2 * (n - 1);
            ans = ans % 1000000007;
        }
        // System.out.println(Arrays.toString(leafNums));


        return ans % 1000000007;
    }

    // 统计每棵树的叶子节点数量
    public long countLeafs(TreeNode root) {
        maxDepth = 0;
        count = 0;
        dfs(root, 0);
        return count;
    }

    public void dfs(TreeNode node, int depth) {
        if (node == null) {
            return;
        }

        if (node.left == null && node.right == null) {
            if (depth > maxDepth) {
                maxDepth = depth;
                count = 1;
            } else if (depth == maxDepth) {
                count++;
            }
            return;
        }

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
}