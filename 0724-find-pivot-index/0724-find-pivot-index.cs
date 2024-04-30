public class Solution {
    public int PivotIndex(int[] nums) {
        int right = 0;
        for (int i = 1; i < nums.Length; i++) {
            right += nums[i];
        }
        int left = 0;
        if (left == right) return 0;
        for (int i = 1; i < nums.Length; i++) {
            left += nums[i - 1];
            right -= nums[i];
            if (left == right) return i;
        }
        return -1;
    }
}