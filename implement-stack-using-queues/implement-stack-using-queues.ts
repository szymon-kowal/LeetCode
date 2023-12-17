class MyQueue {
    queue;
    constructor() {
        this.queue = []
    }
    push(n: number) {
        this.queue.push(n)
    }
    peek(): (number | null) {
        return this.queue[0]
    }
    pop() {
        return this.queue.shift();
    }
    size() {
        return this.queue.length
    }
    isEmpth() {
        return this.queue.length == 0
    }
}


class MyStack {
    public Queue;
    constructor() {
        this.Queue = new MyQueue()
    }

    push(x: number): void {
        let l = this.Queue.queue.length;
        this.Queue.push(x)
        for(let i = 1; i <= l; i++) {
            let r = this.Queue.pop();
            this.Queue.push(r)
        }
    }

    pop(): number {
        return this.Queue.pop()
    }

    top(): number {
        return this.Queue.peek()
    }

    empty(): boolean {
        return this.Queue.queue.length == 0
    }
}