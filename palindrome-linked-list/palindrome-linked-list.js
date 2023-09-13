/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;
    count = 0;
    arr = [];
    if (!head) return false;
    while (fast) {
        arr.push(fast.val);
        fast = fast.next;
    }

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[arr.length - i - 1]) {
            return false;
        }
    }
    return true;
};