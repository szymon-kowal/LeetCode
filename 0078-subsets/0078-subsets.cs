public class Solution {
    public IList<IList<int>> Subsets(int[] nums) {
        List<IList<int>> answer = new();
        helper(new List<int>(), answer, nums, 0);
        return answer;
    }
    
    private void helper(IList<int> currentList,List<IList<int>> answer, int[] nums, int index) {
        answer.Add(currentList.ToList());
        
        for (int i = index; i < nums.Length; i++) {
            currentList.Add(nums[i]);
            helper(currentList, answer, nums, i + 1);
            currentList.RemoveAt(currentList.Count - 1);
        } 
        return;
    }
}