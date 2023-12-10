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

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const answer = [];
    const map = new Map();
    function dfs(node: TreeNode | null):string {
        if (!node) return "null"     
        let key = `${node.val},${dfs(node.left)},${dfs(node.right)}`
        if (map.get(key) === 1) {
            answer.push(node)
        }
        map.set(key, (map.get(key) + 1) || 1)
        return key
    }
    dfs(root)
    return answer;
};