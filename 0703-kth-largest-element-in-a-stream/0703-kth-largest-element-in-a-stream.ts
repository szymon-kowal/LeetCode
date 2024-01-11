class KthLargest {
    k:number;
    storage:number[];
    constructor(k, nums) {
        this.k = k;
        this.storage = nums.sort((a, b) => b - a).slice(0, k); 
    }

    add(val) {
        let index = 0;
        while (index < this.storage.length && val < this.storage[index]) {
            index++;
        }
        this.storage.splice(index, 0, val);

        if (this.storage.length > this.k) {
            this.storage.pop();
        }

        return this.storage[this.storage.length - 1];
    }
}

// Usage
// var obj = new KthLargest(k, nums);
// var param_1 = obj.add(val);
