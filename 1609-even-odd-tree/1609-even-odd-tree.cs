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
    public bool IsEvenOddTree(TreeNode root) {
        if (root == null) return true;

        var queue = new Queue<(TreeNode, int)>();
        queue.Enqueue((root, 0));
        int lastValue = 0; 
        int currentLevel = 0; 

        while (queue.Count > 0) {
            var (curr, level) = queue.Dequeue();

            if (level != currentLevel) {
                currentLevel = level;
                lastValue = (level % 2 == 0) ? Int32.MinValue : Int32.MaxValue;
            }

            if (level % 2 == 0) {
                if (curr.val % 2 == 0 || curr.val <= lastValue) return false;
            } else {
                if (curr.val % 2 != 0 || curr.val >= lastValue) return false;
            }
            lastValue = curr.val;

            if (curr.left != null) queue.Enqueue((curr.left, level + 1));
            if (curr.right != null) queue.Enqueue((curr.right, level + 1));
        }

        return true;
    }
}