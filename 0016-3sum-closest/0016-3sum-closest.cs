
public class Solution {
    public int ThreeSumClosest(int[] nums, int target) {
        Array.Sort(nums); 
        int closestSum = nums[0] + nums[1] + nums[nums.Length - 1];

        for (int i = 0; i < nums.Length - 2; i++) {
            int left = i + 1, right = nums.Length - 1;

            while (left < right) {
                int currentSum = nums[i] + nums[left] + nums[right];
                
                if (Math.Abs(target - currentSum) < Math.Abs(target - closestSum)) {
                    closestSum = currentSum;
                }

                if (currentSum > target) {
                    right--;
                } else if (currentSum < target) {
                    left++;
                } else {
                    return currentSum;
                }
            }
        }
        return closestSum;
    }
}
