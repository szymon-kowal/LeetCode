public class Solution {
    public int MinSubArrayLen(int target, int[] nums) {
        int left = 0;
        int right = 0;
        int currSum = 0;
        int minLength = Int32.MaxValue;
        while (right < nums.Length) {
            currSum += nums[right++];
            while (currSum >= target) {
                minLength = Math.Min(minLength, right - left);
                currSum -= nums[left++];
            }
        }
        
        return minLength == Int32.MaxValue ? 0 : minLength;
    }
}