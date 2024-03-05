public class Solution {
    public int MinimumLength(string s) {
        int left = 0;
        int right = s.Length - 1;
        while (left < right && s[left] == s[right]) {
            char curr = s[left];
            while (left <= right && s[left] == curr) {
                left++;
            }
            while (right > left && s[right] == curr) {
                right--;
            }
        }
        return right - left + 1;
    }
}