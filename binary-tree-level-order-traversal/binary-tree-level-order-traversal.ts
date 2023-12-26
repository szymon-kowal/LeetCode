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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    
    let queue: TreeNode[] = [root];
    const answer:number[][] = [];
    
    while (queue.length) {
        const nextRow:TreeNode[] = [];
        const currRow: number[] = [];
        for (let i = 0; i < queue.length; i++) {
            const curr = queue[i];
            
            if (curr?.left) {
                nextRow.push(curr.left);
            }
            if (curr?.right) {
                nextRow.push(curr.right);
            }
            
            currRow.push(curr?.val);         
        }
        answer.push(currRow);
        queue = nextRow
    }
    return answer;
};