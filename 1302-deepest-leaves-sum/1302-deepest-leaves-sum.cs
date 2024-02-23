/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int DeepestLeavesSum(TreeNode root) {
        var curr = root;
        int maxDepth = helper(root, 0);
        return valueAtMaxDepth(root, 0, maxDepth - 1);
    }
    
    public int helper(TreeNode root, int depth) {
        if (root == null) {
            return depth;
        }
        int leftDepth = helper(root.left, depth + 1);
        int rightDepth = helper(root.right, depth + 1);
        return Math.Max(leftDepth, rightDepth);
    }
    
    public int valueAtMaxDepth(TreeNode root, int depth, int maxDepth) {
        if (root == null) return 0;
        if (depth == maxDepth) {
            return root.val;
        }
        return valueAtMaxDepth(root.left,depth + 1, maxDepth) + valueAtMaxDepth(root.right, depth + 1, maxDepth);
    }
}