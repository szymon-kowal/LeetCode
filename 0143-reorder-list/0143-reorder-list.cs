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
    public void ReorderList(ListNode head) {
        if (head == null || head.next == null) return;
        
        ListNode middleNode = FindMiddleNode(head);
        ListNode newHead = middleNode.next;
        middleNode.next = null;
        
        newHead = ReverseLinkedList(newHead);
        
        ListNode oldList = head;
        ListNode newList = newHead;
        ListNode f1 = null;
        ListNode f2 = null;
        while (oldList != null & newList != null) {
            f1 = oldList.next;
            f2 = newList.next;
            oldList.next = newList;
            newList.next = f1;
            
            oldList = f1;
            newList = f2;
        }
    }  
    private ListNode FindMiddleNode(ListNode curr) {
        ListNode slow = curr;
        ListNode fast = curr;
        
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
    private ListNode ReverseLinkedList(ListNode head) {
        ListNode prevNode = null;
        ListNode curr = head;
        ListNode nextNode = null;
        
        while (curr != null) {
            nextNode = curr.next;
            curr.next = prevNode;
            prevNode = curr;
            curr = nextNode;
        }
        return prevNode;
    }
}