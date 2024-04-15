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
    private int answer = 0;
    public int SumNumbers(TreeNode root) { 
        helper(root, 0);
        return answer;
    }
    public void helper(TreeNode node, int curr) {
        curr = curr * 10 + node.val;
        if (node.left is null && node.right is null) {
            answer += curr;
        }
        if (node.left is not null) helper(node.left, curr);
        if (node.right is not null) helper(node.right, curr);
        return;
    }
}