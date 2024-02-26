public class Solution {
    public int Search(int[] nums, int target) {
        int leftIdx = 0;
        int rightIdx = nums.Length - 1;
        while (leftIdx <= rightIdx) {
            int pivotIdx = (leftIdx + rightIdx) / 2;
            int pivotVal = nums[pivotIdx];
            if (pivotVal == target) {
                return pivotIdx;
            } else if (target > pivotVal) {
                leftIdx = pivotIdx + 1;
            } else {
                rightIdx = pivotIdx - 1;
            }
        }
        return -1;
    }
}