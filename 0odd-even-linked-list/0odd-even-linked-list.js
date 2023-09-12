/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {

    if (!head || !head.next) return head;
    
    let slow = head;
    let fast = head.next;
    let evenHead = fast
    
    while (fast && fast.next) {
        slow.next = fast.next;
        slow = slow.next;
        fast.next = slow.next;
        fast = fast.next;
    }
    
    slow.next = evenHead;
    return head;

};