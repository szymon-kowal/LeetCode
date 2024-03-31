public class Solution {
    public void Rotate(int[] nums, int k) {
        k = k % nums.Length;
        ReverseFromIndex(0, nums.Length - 1, nums);
        ReverseFromIndex(0, k - 1, nums);
        ReverseFromIndex(k, nums.Length - 1, nums);
    }
    private void ReverseFromIndex(int left,int right, int[] nums) {
        while (left < right) {
            int temp = nums[left];
            nums[left++] = nums[right];
            nums[right--] = temp;
        }
    } 
}