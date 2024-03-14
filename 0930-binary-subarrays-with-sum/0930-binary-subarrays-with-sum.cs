public class Solution {
     public int NumSubarraysWithSum(int[] nums, int goal) {
        return SlidingWindowAtMost(nums, goal) - SlidingWindowAtMost(nums, goal - 1);
    }
    
    private int SlidingWindowAtMost(int[] nums, int goal) {
       int start = 0, currentSum = 0, totalCount = 0;

        for (int end = 0; end < nums.Length; end++) {
            currentSum += nums[end];

            while (start <= end && currentSum > goal) {
                currentSum -= nums[start++];
            }

            totalCount += end - start + 1;
        }
        return totalCount;
    }
}