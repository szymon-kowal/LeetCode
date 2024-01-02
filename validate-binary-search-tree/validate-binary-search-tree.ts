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

function helper(node: TreeNode | null, min:number, max:number):boolean {
    if (!node) return true;
    return !(node.val <= min || node.val >= max) && helper(node.left, min, node.val) && helper(node.right,node.val, max);
}

function isValidBST(root: TreeNode | null): boolean {
    return helper(root, -Infinity, Infinity);
};