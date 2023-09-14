class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

var MyLinkedList = function() {
    this.head = null;
};

MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.getLength()) {
        return -1;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    return current.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
    let node = new Node(val);
    if (this.head === null) {
        this.head = node;
    } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
};

MyLinkedList.prototype.addAtTail = function(val) {
    if (this.head === null) {
        this.addAtHead(val);
        return;
    }
    let current = this.head;
    let node = new Node(val);
    while (current.next) {
        current = current.next;
    }
    current.next = node;
    node.prev = current;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index == 0) {
        this.addAtHead(val);
        return;
    }
    if (index == this.getLength()) {
        this.addAtTail(val);
        return;
    }
    if (index > this.getLength()) return;

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    let node = new Node(val);
    let next = current.next;
    current.next = node;
    node.prev = current;
    node.next = next;
    next.prev = node;
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.getLength()) {
        return;
    }
    if (index == 0) {
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        }
        return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
        current = current.next;
    }
    let next = current.next.next;
    current.next = next;
    if (next) {
        next.prev = current;
    }
};

MyLinkedList.prototype.getLength = function() {
    let index = 0;
    let current = this.head;
    while (current){
        current = current.next;
        index++;
    }
    return index;
};
