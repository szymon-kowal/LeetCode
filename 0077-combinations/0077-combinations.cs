public class Solution {
    public IList<IList<int>> Combine(int n, int k) {
        List<IList<int>> answer = new();
        helper(1, n, k, new List<int>(), answer);
        return answer;
    }
    
    private void helper(int startNum, int n, int k, IList<int> currentList, List<IList<int>> answer) {
        if (currentList.Count == k) {
            answer.Add(currentList.ToList());
            return;
        }
        for (int i = startNum; i <= n; i++) {
            currentList.Add(i);
            helper(i + 1, n, k, currentList, answer);
            currentList.RemoveAt(currentList.Count - 1);
        }
        return;
    }
}