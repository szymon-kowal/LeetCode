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



function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    
    if (!inorder.length) return null;
    if (!postorder.length) return null;
    
    const root:TreeNode = new TreeNode(postorder.pop());
    
    const index: number = inorder.indexOf(root.val);
    
    root.right = buildTree(inorder.slice(index + 1), postorder.slice(index));

    root.left = buildTree(inorder.slice(0, index ), postorder.slice(0, index ));
    
    
    return root;
};