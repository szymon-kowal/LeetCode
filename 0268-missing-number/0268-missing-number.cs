public class Solution {
    public int MissingNumber(int[] nums) {
        int count = nums.Length;
        for (int i = 0; i < nums.Length; i++) {
            count += i;
            count -= nums[i];
        }
        return count;
    }
}