function decodeString(s: string): string {
    let str:string = '';
    let num :number = 0;
    const stack:[string, number][] = [];
    
    
    for (let ch of s) {
        if (ch === '[') {
            stack.push([str,num])
            num = 0;
            str = ''
        } else if (ch === ']') {
            const [prevString, prevNum] = stack.pop();
            str = prevString + str.repeat(prevNum);
        }else if (!isNaN(Number(ch))) {
            num=num*10 + +ch;
        } else {
            str += ch;
        }
    }
    return str;
};