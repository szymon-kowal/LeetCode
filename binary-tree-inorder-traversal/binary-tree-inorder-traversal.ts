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
function walk(node: TreeNode | null, result:number[]) {
    if (node) {
        walk(node.left, result)
        result.push(node.val)
        walk(node.right, result)
    }
    return result;
}
function inorderTraversal(root: TreeNode | null): number[] {
    return walk(root, []);
};