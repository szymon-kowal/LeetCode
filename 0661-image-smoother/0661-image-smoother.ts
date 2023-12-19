function helper(img:number[][],x:number, y:number):number {
    let count:number = 0;
    let sum:number = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if ((x + i) >= 0 && (x+i) < img.length && (y + j) >= 0 && (y + j) < img[0].length) {
                count++;
                sum += img[x+i][y+j];
            }
        }
    }
    return Math.floor(sum/count);
}




function imageSmoother(img: number[][]): number[][] {
    const rows = img.length;
    const cols = img[0].length;
    const answer = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
    
    for (let i = 0; i < img.length; i++) {
        for (let j = 0; j < img[0].length; j++) {
            answer[i][j] = helper(img,i,j);
        }
    }
    return answer;
};