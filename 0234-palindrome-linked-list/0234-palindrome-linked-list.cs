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
    public bool IsPalindrome(ListNode head) {
        if (head.next == null) return true;
        Stack<int> stackOfVals = new();
        ListNode slow = head;
        ListNode fast = head;
        
        stackOfVals.Push(slow.val);
        
        while (fast.next is not null && fast.next.next is not null) {
            slow = slow.next;
            fast = fast.next.next;
            stackOfVals.Push(slow.val);
        }
        
        if (fast.next != null) {
            slow = slow.next;
        }

        while (slow != null) {
            int top = stackOfVals.Pop();
            if (top != slow.val) return false;
            slow = slow.next;
        }
            
        return true;
    }
}