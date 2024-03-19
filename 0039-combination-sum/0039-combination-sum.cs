public class Solution {
    public IList<IList<int>> CombinationSum(int[] candidates, int target) {
        List<IList<int>> answerList = new List<IList<int>>();
        Array.Sort(candidates);
        helper(candidates, target, 0, new List<int>(), answerList);
        return answerList;
    }
    private void helper(int[] candidates, int currTarget, int idx, List<int> temp, List<IList<int>> answerList) {
        if (currTarget == 0) {
            answerList.Add(temp.ToList());
        } else {
            while (idx < candidates.Length) {
                if (candidates[idx] > currTarget) break;
                
                temp.Add(candidates[idx]);
                helper(candidates, currTarget - candidates[idx], idx, temp, answerList);
                temp.RemoveAt(temp.Count - 1);
                
                idx++;
            }
        }
    }
}