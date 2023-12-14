const directions:number[][] = [[1,0],[-1,0],[0,1],[0, -1]];

function toWater(grid: string[][], x: number, y: number ): void {
    if(grid[x]?.[y] !== '1'){
        return;
    }

    grid[x][y] = '0';

    for (let i = 0; i < directions.length; i++) {
        toWater(grid,x + directions[i][0],y + directions[i][1]);
    }
}

function numIslands(grid: string[][]): number {
    let isl = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
           if(grid[i][j] === '1')
            {
                isl++;
                toWater(grid, i, j);
            } 
        }
    }
            

    return isl;
};