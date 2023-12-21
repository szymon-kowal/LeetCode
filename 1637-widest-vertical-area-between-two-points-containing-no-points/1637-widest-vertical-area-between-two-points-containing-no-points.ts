function maxWidthOfVerticalArea(points: number[][]): number {
    const helpArr:number[] = [];
    
    for (let i = 0; i < points.length; i++) {
        helpArr.push(points[i][0]);
    }
    
    helpArr.sort((a,b) => (a - b));
    let returnVal:number = 0;
    for (let i = 0; i < helpArr.length - 1; i++) {
        if ((helpArr[i + 1] - helpArr[i]) > returnVal) {
            returnVal = helpArr[i + 1] - helpArr[i];
        }
    }
    return returnVal;
};