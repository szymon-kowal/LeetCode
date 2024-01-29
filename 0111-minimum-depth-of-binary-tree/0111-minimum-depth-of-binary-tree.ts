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
function findDepth(node: TreeNode | null, depth: number): number {
    if (!node) return depth;
    depth++;
    if (!node.left && !node.right) return depth; 
    if (!node.left) return findDepth(node.right, depth);
    if (!node.right) return findDepth(node.left, depth);
    return Math.min(findDepth(node.left, depth), findDepth(node.right, depth))
}

function minDepth(root: TreeNode | null): number {
    if (!root) return 0;
    return findDepth(root, 0);
};