function openLock(deadends: string[], target: string): number { 
    let deadendSet = new Set(deadends)
    let queue = [["0000", 0]];
    
    if (deadendSet.has("0000")) return -1;
    
    function children(lock:string):string[]{
        const res:string[] = [];
        let lockArr = lock.split("").map(Number);
        for (let i = 0; i < 4; i++) {
            let originalValue = lockArr[i];
            lockArr[i] = (lockArr[i] + 1) % 10;
            res.push(lockArr.join(''));
            lockArr[i] = originalValue; 

            originalValue = lockArr[i];
            lockArr[i] = (lockArr[i] - 1 + 10) % 10;
            res.push(lockArr.join(''));
            lockArr[i] = originalValue;
        }
        return res;
    };
    
    while (queue.length > 0) {
        let [curr, idx] = queue.shift()
        
        if (curr === target) {
            return idx as number;
        }
        idx = Number(idx) + 1;
        const childrens = children(curr as string);
        for (let i = 0; i < childrens.length; i++) {
            let child = childrens[i];
            if (!(deadendSet.has(child))) {
                deadendSet.add(child)
                queue.push([child, idx])
            }
        }
    }
    return -1;
}
    