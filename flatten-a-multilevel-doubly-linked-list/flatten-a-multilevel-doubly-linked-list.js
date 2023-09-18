/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) return null;
  
    let current = head;
    
    while (current) {
        if (current.child) {
        let nextNode = current.next;
        let childList = current.child;
        
        while (childList.next) {
            childList = childList.next;
        }
        
        current.next = current.child;
        current.child.prev = current;
        childList.next = nextNode;
        
        if (nextNode) {
            nextNode.prev = childList;
        }
        
        current.child = null;
        }
        
        current = current.next;
    }
    
    return head;
};