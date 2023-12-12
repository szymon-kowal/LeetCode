function isValid(s: string): boolean {
    const bracketsMap = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    
    let stack:string[] = [];
    
    const arr:string[] = s.split('');

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if(['(','[','{'].includes(curr)) {
            stack.push(curr)
        } else if (stack.pop() !== bracketsMap[curr]) {
            return false;
        }
    }
    return stack.length === 0;
};