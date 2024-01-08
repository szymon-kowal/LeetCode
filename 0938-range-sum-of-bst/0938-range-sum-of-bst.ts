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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    let answer:number = 0;

    if (root == null) return answer;
    const queue:TreeNode[] = [root];
    while(queue.length !== 0) {
        const curr = queue.shift();
        if (curr.val >= low && curr.val <= high) answer += curr.val;
        if (curr.left)  queue.push(curr.left);
        if (curr.right) queue.push(curr.right)
    };
    return answer;
};