public class Solution {
    public int[] LeftRightDifference(int[] nums) {
        int rightSum = 0;
        int leftSum = 0;
        foreach(int num in nums) {
            rightSum += num;
        }
        int[] answer = new int[nums.Length];
        for (int i = 0; i < nums.Length; i++) {
            rightSum -= nums[i];
            answer[i] = Math.Abs(leftSum - rightSum);
            leftSum += nums[i];
        }
        return answer;
    }
}