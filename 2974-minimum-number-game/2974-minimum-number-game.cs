public class Solution {
    public int[] NumberGame(int[] nums) {
        int[] answer = new int[nums.Length];
        Array.Sort(nums);
        for(int i = 0; i < nums.Length; i += 2){
            answer[i] = nums[i + 1];
            answer[i + 1] = nums[i];
        }
        return answer;
    }
}