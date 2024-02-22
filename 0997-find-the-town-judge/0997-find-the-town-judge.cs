public class Solution {
    public int FindJudge(int n, int[][] trust) {
        int[] trusts = new int[n];
        int[] trustedBy = new int[n];
        
        foreach(var t in trust) {
            trusts[t[0] - 1]++;
            trustedBy[t[1] - 1]++;
        }
        
        for (int i = 0; i < n; i++) {
            if (trusts[i] == 0 && trustedBy[i] == n - 1) {
                return i + 1;
            }
        }
        return -1;
    }
}