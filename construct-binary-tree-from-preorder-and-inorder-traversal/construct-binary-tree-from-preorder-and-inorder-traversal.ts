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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!inorder.length || !preorder.length) return null;
    
    const root:TreeNode = new TreeNode(preorder.shift());
    
    const idx: number = inorder.indexOf(root.val);
    
    
    root.left = buildTree(preorder.slice(0, idx + 1), inorder.slice(0, idx))
    root.right = buildTree(preorder.slice(idx), inorder.slice(idx + 1))
    return root;
};