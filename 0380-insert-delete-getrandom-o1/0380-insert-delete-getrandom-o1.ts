class RandomizedSet {
    private set: Set<number>
    private arr: number[];
    constructor() {
        this.set = new Set<number>();
        this.arr = [];
    }

    insert(val: number): boolean {
        if (this.set.has(val)) {
            return false;
        }
        this.set.add(val);
        this.arr.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.set.has(val)) {
            return false;
        }
        const idx: number = this.arr.indexOf(val);
        this.arr[idx] = this.arr[this.arr.length - 1];
        this.arr.pop();
        this.set.delete(val);
        return true;
    }

    getRandom(): number {
        return this.arr[Math.floor(Math.random() * this.arr.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */