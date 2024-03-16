public class Solution {
    public int NumSubarrayProductLessThanK(int[] nums, int k) {
        if (k <= 1) return 0;
        int prod = 1;
        int answer = 0;
        int left = 0;
        for (int i = 0; i < nums.Length; i++) {
            prod *= nums[i];
            while (prod >= k) {
                prod /= nums[left++];
            }
            answer += i - left + 1;
        }
        
        return answer;
    }
}