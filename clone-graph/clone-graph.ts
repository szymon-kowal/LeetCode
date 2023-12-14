/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

const nodeMap = new Map<Node,Node>();

function cloneGraph(node: Node | null): Node | null {
	if (!node) return null;
    
    if (nodeMap.has(node)) {
        return nodeMap.get(node);
    }
    
    const newNode = new Node(node.val)
    
    nodeMap.set(node, newNode);
    
    newNode.neighbors = node.neighbors.map((nei) => cloneGraph(nei));
    return newNode;
};