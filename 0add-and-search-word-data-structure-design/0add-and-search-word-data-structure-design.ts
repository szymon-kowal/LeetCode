class TrieNode {
    childs:Map<string,TrieNode>;
    isEnd:boolean;
    constructor() {
        this.childs = new Map<string, TrieNode>;
        this.isEnd = false;
    }
}


class WordDictionary {
    root:TrieNode
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let curr = this.root;
        for (let char of word) {
            if (!curr.childs.has(char)) {
                curr.childs.set(char, new TrieNode);
            }
            curr = curr.childs.get(char);
        }
        curr.isEnd = true;
    }

    search(word: string): boolean {
        return this.searchInWord(word, 0, this.root);
    }

    private searchInWord(word: string, index: number, node: TrieNode): boolean {
        if (index === word.length) return node.isEnd;
        
        const char = word.charAt(index);
        
            if (char === '.') {
                for (let child of node.childs.values()) {
                    if (this.searchInWord(word, index + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!node.childs.has(char)) {
                    return false;
                }
            return this.searchInWord(word, index + 1, node.childs.get(char));
        }
    }
}


/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */