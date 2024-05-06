public class Solution {
    public long MaximumHappinessSum(int[] happiness, int k) {
        long answer = 0;
        Array.Sort(happiness, (a,b) => b - a);
        for (int i = 0; i < k; i++) {
            if (happiness[i] - i > 0) {
                answer += happiness[i] - i;
            } else {
                return answer;
            }  
        }
        return answer;
    }
}