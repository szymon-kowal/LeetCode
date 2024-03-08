public class Solution {
    public double FindMaxAverage(int[] nums, int k) {
        double maxAverageOfK = Int32.MinValue;
        double sumOfKNums = 0;
        for (int i = 0; i < nums.Length; i++) {
            sumOfKNums += nums[i];
            if (i >= k) {
                sumOfKNums -= nums[i - k];
            }
            if (i >= k - 1) {
                maxAverageOfK = Math.Max(sumOfKNums, maxAverageOfK);
            }
        }
        return maxAverageOfK / k;
    }
}