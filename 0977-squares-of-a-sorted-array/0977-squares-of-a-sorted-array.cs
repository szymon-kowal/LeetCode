public class Solution {
    public int[] SortedSquares(int[] nums) {
        int[] answer = new int[nums.Length];
        
        int left = 0;
        int right = nums.Length - 1;
        int placeToInsert = right;
        
        for (int i = 0; i < nums.Length; i++) {
            int leftSqred = nums[left] * nums[left];
            int rightSqred = nums[right] * nums[right];
            if (leftSqred > rightSqred) {
                answer[placeToInsert] = leftSqred;
                left++;
            } else {
                answer[placeToInsert] = rightSqred;
                right--;
            }
            placeToInsert--;
        }
        return answer;
    }
}