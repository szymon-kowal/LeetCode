/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function helper(node: TreeNode | null, minV : number, maxV : number): number {
    if (!node) return 0;
    
    maxV = Math.max(node.val, maxV);
    minV = Math.min(node.val, minV);
    
    let diff = Math.abs(maxV - minV);
    
    let leftDiff = helper(node.left, minV, maxV);
    let rightDiff = helper(node.right, minV, maxV);
    
    return Math.max(diff, leftDiff, rightDiff);
};

function maxAncestorDiff(root: TreeNode | null): number {
    return helper(root, root.val, root.val);
};