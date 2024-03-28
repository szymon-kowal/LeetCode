public class Solution {
    public int MaxSubarrayLength(int[] nums, int k) {
        int left = 0, ans = 0;
        Dictionary<int, int> hashMap = new();
        for (int i = 0; i < nums.Length; i++) {
            if (hashMap.ContainsKey(nums[i])) {
                hashMap[nums[i]]++;
            } else {
                hashMap.Add(nums[i], 1);
            }
            while(hashMap[nums[i]] > k) {
                hashMap[nums[left++]]--;
            }
            ans = Math.Max(ans, i - left + 1);
        }
        return ans;
    }
}