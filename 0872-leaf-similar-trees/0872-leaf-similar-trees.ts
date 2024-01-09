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
function walk(node: TreeNode, arr:number[]): void {
    if (node.left) {
        walk(node.left, arr)
    }
    if (node.right) {
        walk(node.right, arr) 
    }
    if (!node.left && !node.right) arr.push(node.val)
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    if (!root1 && !root2) return true;
    const valLeft:number[] = [];
    const valRight:number[] = [];
    walk(root1, valLeft);
    walk(root2, valRight);
    if (valLeft.length !== valRight.length) return false;
    for (let i = 0; i < valLeft.length; i++) {
        if (valLeft[i] !== valRight[i]) return false
    }
    return true;
};