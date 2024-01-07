class TrieNode {
    childrens: Map<string, TrieNode>;
    endVal: number;
    constructor() {
        this.childrens = new Map<string, TrieNode>;
        this.endVal = 0;
    }
}


class MapSum {
    root:TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(key: string, val: number): void {
        let curr = this.root;
        for (const char of key){
            if(!curr.childrens.has(char)) {
                curr.childrens.set(char, new TrieNode());
            }
            curr = curr.childrens.get(char);
        }
        curr.endVal = val;
    }

    sum(prefix: string): number {
        let curr = this.root;
        let sum: number = 0;
        for (const char of prefix) {
            if(!curr.childrens.has(char)) {
                return 0;
            }
            curr = curr.childrens.get(char)
        }
        const queue:TrieNode[] = [curr];
        while (queue.length !== 0) {
            const element = queue.shift();
            sum += element.endVal;
            for (const [,childNode] of element.childrens) {
                queue.push(childNode);
            }
        }
        return sum;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */