public class Solution {
    public int MaxSum(int[][] grid) {
        int sum = 0;
        for (int i = 0; i <= grid.Length - 3; i++) {
            for (int j = 0; j <= grid[0].Length - 3; j++) {
                int currSum = grid[i][j] + grid[i][j+1] + grid[i][j+2] + grid[i+1][j+1] + 
                            grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2];
                sum = Math.Max(sum, currSum);
            }
        }
        return sum;
    }
}