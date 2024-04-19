function numIslands(grid: string[][]): number {
    let count = 0;
    function bfs(row, col) {
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === '0') {
            return;
        }

        grid[row][col] = '0';
        bfs(row - 1, col);
        bfs(row + 1, col);
        bfs(row, col - 1);
        bfs(row, col + 1);
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                count++;
                bfs(i, j);
            }
        }
    }

    return count;
};
