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

function walk(root: TreeNode | null, arr:number[]) {
    if (root === null) return;
    
    walk(root.left, arr)
    walk(root.right,arr)
    arr.push(root.val)
}

function postorderTraversal(root: TreeNode | null): number[] {
    const ans:number[] = [];
    walk(root, ans);
    return ans;
};

