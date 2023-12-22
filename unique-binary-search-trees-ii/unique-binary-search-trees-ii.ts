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

function generateTrees(n: number, start = 1): Array<TreeNode | null> {
  if (n < start) return [null];
  if (n === start) return [new TreeNode(n)];
  const trees: TreeNode[] = [];
  for (let i = start; i <= n; i++) {
    const leftTrees = generateTrees(i - 1, start);
    const rightTrees = generateTrees(n, i + 1);
    for (const left of leftTrees) {
      for (const right of rightTrees) {
        trees.push(new TreeNode(i, left, right));
      }
    }
  }
  return trees;
};