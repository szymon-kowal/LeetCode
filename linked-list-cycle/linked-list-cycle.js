/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let current = head;
    let current2 = head;
    
    while (current2 !== null && current2.next !== null) {
        current = current.next;
        current2 = current2.next.next;
        if (current === current2) {
            return true;
        }
    }
    return false;
};