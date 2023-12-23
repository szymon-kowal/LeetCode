function isPathCrossing(path: string): boolean {
    const pathArr: string[] = path.split('');
    let curr: [number, number] = [0, 0];
    const pathSet = new Set<string>([curr.toString()]);

    for (let i = 0; i < pathArr.length; i++) {
        if (pathArr[i] === 'N') {
            curr = [curr[0] + 1, curr[1]];
        } else if (pathArr[i] === 'S') {
            curr = [curr[0] - 1, curr[1]];
        } else if (pathArr[i] === 'E') {
            curr = [curr[0], curr[1] + 1];
        } else {
            curr = [curr[0], curr[1] - 1];
        }

        const currString = curr.toString();
        if (pathSet.has(currString)) {
            return true;
        } else {
            pathSet.add(currString);
        }
    }
    return false;
}
