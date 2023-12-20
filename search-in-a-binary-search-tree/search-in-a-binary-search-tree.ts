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

function walkCopy(root: TreeNode | null): TreeNode | null {
    if (root === null) {
        return null;
    }
    
    const newNode = new TreeNode(root.val);
    newNode.left = walkCopy(root.left);
    newNode.right = walkCopy(root.right);

    return newNode;
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) {
        return null;
    }

    if (val === root.val) {
        return walkCopy(root);
    } else if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
}