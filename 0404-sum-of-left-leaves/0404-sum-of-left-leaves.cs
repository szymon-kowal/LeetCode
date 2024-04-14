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
    public int SumOfLeftLeaves(TreeNode root) {
        int answer = 0;
        Helper(root, false,ref answer);
        return answer;
    }

    void Helper(TreeNode node, bool isLeft,ref int answer){
        if(isLeft && node.left == null && node.right == null){
            answer += node.val;
            return;
        }        
        if(node.left != null)
            Helper(node.left, true,ref answer);
        if(node.right != null)
            Helper(node.right, false,ref answer);
    }
}