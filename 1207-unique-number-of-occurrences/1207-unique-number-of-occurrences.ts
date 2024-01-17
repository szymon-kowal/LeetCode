function uniqueOccurrences(arr: number[]): boolean {
    const numMap = new Map<number, number>();
    for (let i = 0; i < arr.length; i++) {
        numMap.set(arr[i], numMap.has(arr[i]) ? numMap.get(arr[i]) + 1 : 1)
    }
    const numSet = new Set<number>();
    for (const [key, value] of numMap) {
        if (numSet.has(value)) return false;
        numSet.add(value)
    }
    return true;
};