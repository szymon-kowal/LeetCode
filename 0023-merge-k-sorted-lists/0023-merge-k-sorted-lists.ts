/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const newL = new ListNode();
    let dummy = newL;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            dummy.next = list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next;
    }
    
    if (list1 !== null) {
        dummy.next = list1;
    } else {
        dummy.next = list2;
    }
    
    return newL.next;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    if (lists.length === 0) return null;

    let currList = lists[0];
    for (let i = 1; i < lists.length; i++) {
        currList = mergeTwoLists(currList, lists[i]);
    }
    
    return currList;
};
