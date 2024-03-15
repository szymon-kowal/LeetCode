public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> previousElements = new();
        for (int i = 0; i < nums.Length; i++) {
            int valueToFind = target - nums[i];
            if (previousElements.ContainsKey(valueToFind)) {
                return new int[] {previousElements[valueToFind], i};
            }
            if (!previousElements.ContainsKey(nums[i])) {
                previousElements.Add(nums[i], i);    
            }
        }
        return [0, 0];
    }
}