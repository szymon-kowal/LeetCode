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
    if (!list1) return list2;
    if (!list2) return list1;
    const dummy = new ListNode();
    let end = dummy;
    
    while (list1 && list2) {
        if (list1.val < list2.val) {
            end.next = list1;
            list1 = list1.next;
        } else {
            end.next = list2;
            list2 = list2.next;
        }
        end = end.next;
    }
    
    end.next = list1 || list2;
    
    return dummy.next;
};