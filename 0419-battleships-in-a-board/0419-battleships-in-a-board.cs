public class Solution {
    public int CountBattleships(char[][] board) 
    {
        int count = 0;
        
        for(int i = 0; i < board.Length; i++) {
            for(int j=0; j<board[0].Length; j++) {
                if(board[i][j] == 'X') {
                    Dfs(board,i,j);
                    count++;
                }
            }
        }
        
        return count;
    }
    
    private void Dfs(char[][] board, int i, int j)
    {
        if(i < 0 || i >= board.Length || j < 0 || j >= board[0].Length || board[i][j] == '.')
            return;
        
        board[i][j] = '.';
        
        Dfs(board,i,j+1);
        Dfs(board,i+1,j);
    }
}