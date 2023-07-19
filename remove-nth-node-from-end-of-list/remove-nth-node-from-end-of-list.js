/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let count = 0;
    let newHead = head;
    while (newHead != null) { 
        count++;
        newHead = newHead.next;
    }
    if (n === count) {
        return head.next;
    }
    newHead = head; 
    for (let i = 0; i < count - n - 1; i++) { 
        head = head.next;
    }
    head.next = head.next.next;
    return newHead; // Return the updated head of the list
};






