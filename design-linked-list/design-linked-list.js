
var MyLinkedList = function() {
    this.head = null;
};


var Node = function(val) {
    this.val = val;
    this.next = null;
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0) {
        return -1;
    }
    let current = this.head;
    let count = 0;
    while (current !== null && count < index) {
        current = current.next;
        count++;
    }
    return current !== null ? current.val : -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if (this.head === null) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    let newNode = new Node(val);
    let count = 0;
    let current = this.head;
    while (current !== null & count < index - 1) {
        current = current.next;
        count++;
    }
    
    if (current !== null) {
        newNode.next = current.next;
        current.next = newNode;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0) { 
    return;
    } else if (index === 0) {
        this.head = this.head !== null ? this.head.next : null;
        return;
    }
    
    let current = this.head;
    let count = 0;
    
    while (current !== null & count < index - 1) {
        current = current.next;
        count++;
    }
    
    if (current !== null && current.next !== null) {
        current.next = current.next.next;
    }
    
    
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */