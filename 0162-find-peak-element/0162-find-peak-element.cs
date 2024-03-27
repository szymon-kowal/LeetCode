public class Solution {
    public int FindPeakElement(int[] nums) {
        int left = 0;
        int right = nums.Length - 1;
        while (left + 1 < right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] < nums[mid + 1]) {
                left = mid;
            }
            else {
                right = mid;
            }
        }
        return nums[left] > nums[right] ? left : right;
    }
}