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
function retLeft(node: TreeNode | null, arr:number[]) {
    if (node === null) {
        arr.push(null);
        return;
    }
    arr.push(node.val);
    retLeft(node.left, arr);
    retLeft(node.right, arr);
}

function retRight(node: TreeNode | null, arr:number[]) {
    if (node === null) {
        arr.push(null);
        return;
    }
    arr.push(node.val);
    retRight(node.right, arr);
    retRight(node.left, arr);
}

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function isSymmetric(root: TreeNode | null): boolean {
    const leftTree = [];
    const rightTree = [];
    
    retLeft(root,leftTree);
    retRight(root, rightTree);
    return arraysEqual(leftTree, rightTree);
};