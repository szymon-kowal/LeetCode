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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const queueP:TreeNode[] = [p];
    const queueQ:TreeNode[] = [q];
    while(queueP.length > 0 && queueQ.length > 0) {
        const pNode = queueP.shift();
        const qNode = queueQ.shift();
        
        if (!pNode && !qNode) continue;
        
        if (!qNode || !pNode || pNode.val !== qNode.val) return false;
        
        queueP.push(pNode.left)
        queueP.push(pNode.right)
        queueQ.push(qNode.left)
        queueQ.push(qNode.right)
    }
    return (queueP.length === 0 && queueQ.length === 0);
};