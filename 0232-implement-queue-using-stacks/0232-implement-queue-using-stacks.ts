class MyQueue {
    private stack: number[];
    constructor() {
        this.stack = [];
    }

    push(x: number): void {
        this.stack.unshift(x);
    }

    pop(): number {
        return this.stack.pop();
    }

    peek(): number {
        return this.stack[this.stack.length - 1];
    }

    empty(): boolean {
        return this.stack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */