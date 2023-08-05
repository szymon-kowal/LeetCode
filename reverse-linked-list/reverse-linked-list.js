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
var reverseList = function(head) {
  let node = head;
  let previous = null;
  let tmp = null;

  while (node) {
    tmp = node.next;
    node.next = previous;
    previous = node;
    node = tmp;
  }

  return previous;
}