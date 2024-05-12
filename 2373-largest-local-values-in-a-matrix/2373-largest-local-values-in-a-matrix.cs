public class Solution {
    public int[][] LargestLocal(int[][] grid) {
        int n = grid.Length;
        int[][] maxLocal = new int[n - 2][];
        for (int i = 0; i < n - 2; i++) {
            maxLocal[i] = new int[n - 2];
        }
        
        for (int i = 0; i < n - 2; i++) {
            for (int j = 0; j < n - 2; j++) {
                maxLocal[i][j] = _findMax(grid, i, j);
            }
        }
        
        return maxLocal;
    }
    
    private int _findMax(int[][] grid, int x, int y) {
        int maxElement = 0;
        for (int i = x; i < x + 3; i++) {
            for (int j = y; j < y + 3; j++) {
                maxElement = Math.Max(maxElement, grid[i][j]);
            }
        }
        return maxElement;
    }
}