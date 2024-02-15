public class Solution {
    public long LargestPerimeter(int[] nums) {
        Array.Sort(nums);
        long answer = -1;
        long sum = 0;
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] < sum){
                answer = nums[i] + sum;
            }
            sum += nums[i];
        }
        return answer;
    }
}