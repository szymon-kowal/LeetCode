/*
// Definition for a Node.
public class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}

    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
}
*/

public class Solution {
    public Node Connect(Node root) {
        if(root == null) return root;
        
        Queue<Node> queue = new Queue<Node>();
        queue.Enqueue(root);
        
        while(queue.Count > 0){
            int count = queue.Count;
            
            for(int i=0; i<count; i++){
                var currentNode = queue.Dequeue();
                
                if(currentNode.left != null)
                    queue.Enqueue(currentNode.left);
                
                if(currentNode.right != null)
                    queue.Enqueue(currentNode.right);
                
                if(i < count-1)
                    currentNode.next = queue.Peek();
            }
        }
        
        return root;
    }
}