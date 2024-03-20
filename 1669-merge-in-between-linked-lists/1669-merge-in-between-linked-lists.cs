/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeInBetween(ListNode list1, int a, int b, ListNode list2) {
        ListNode head = new ListNode(0, list1);
        ListNode slow = head;
        ListNode fast = head;
        
        int index = 0;
        for (int i = 0; i < a; i++) {
            slow = slow.next;
            fast = fast.next;
            index++;
        }
        
        for (int i = index; i <= b; i++) {
            fast = fast.next;
        }
        
        // Split list after last element to remove
        var temp = fast.next;
        fast.next = null;
        fast = temp;
        
        ListNode list2ToEnd = list2;
        
        while (list2ToEnd.next != null) {
            list2ToEnd = list2ToEnd.next;
        }
        
        slow.next = list2;
        list2ToEnd.next = fast;
        
        return head.next;
    }
}