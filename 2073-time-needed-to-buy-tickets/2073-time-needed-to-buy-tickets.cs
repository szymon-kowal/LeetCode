public class Solution {
    public int TimeRequiredToBuy(int[] tickets, int k) {
        int answer = 0;
        while (tickets[k] > 0) {
            for (int i = 0; i < tickets.Length; i++) {
                if (tickets[i] > 0) {
                    tickets[i]--;
                    answer++;
                }
                if (tickets[k] == 0) return answer;
            }
        }
        return 1;
    }
}