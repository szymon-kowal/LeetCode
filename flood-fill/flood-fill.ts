const dir: number[][] = [[0, 1], [1, 0], [-1, 0], [0, -1]];

function walk(image: number[][], row: number, col: number, color: number, basic:number) {
    for (const d of dir) {
        const newRow = row + d[0];
        const newCol = col + d[1];

        if (
            newRow >= 0 &&
            newRow < image.length &&
            newCol >= 0 &&
            newCol < image[0].length &&
            image[newRow][newCol] === basic
        ) {
            floodFill(image, newRow, newCol, color);
        }
    }
}

function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    if (image[sr][sc] === color) return image;
    
    const basicColor = image[sr][sc];
    image[sr][sc] = color;

    walk(image, sr, sc, color, basicColor);
    
    return image;
}