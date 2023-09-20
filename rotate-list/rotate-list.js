/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    let first = head;
    let current = first;
    let last;
    for (let i = 0; i < k; i++) {
        while (current.next.next) {
            current = current.next;
        }
        last = current.next;
        current.next = null;
        last.next = first;
        first = last;
        current = first;
 
    }
    return first;
};