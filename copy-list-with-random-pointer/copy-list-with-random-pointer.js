/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let newList = new Node(0, null, null);
    let check = newList;
    let current = head;
    while (current) {
        newList.next = new Node(current.val, null, null);
        newList = newList.next;
        current = current.next;
    }
    // I need to somehow add random pointers to the newList
    
    let current2 = head;
    let newList2 = check.next;
    
    let count = 0;
    
    while (newList2) {
        if (current2.random === null) {
            newList2.random = null;
        } else {
            let oldCurrent = head;
            count = 0;
            while (current2.random !== oldCurrent) {
                count++;
                oldCurrent = oldCurrent.next;
            }
            let newCurrent = check.next;
            for (let i = 0; i < count; i++) {
                newCurrent = newCurrent.next;
            }
            newList2.random = newCurrent;
            console.log(count)
        }
        
        
        
        
        
        // newList2.random = smth in newList2;
        newList2 = newList2.next;
        current2 = current2.next;
    }
    
    
    return check.next;
};