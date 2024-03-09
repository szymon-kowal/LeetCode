public class Solution {
    public int GetCommon(int[] nums1, int[] nums2) {
        int pointerFirst = 0;
        int pointerSecond = 0;
        while (pointerFirst < nums1.Length && pointerSecond < nums2.Length) {
            int valueFirst = nums1[pointerFirst];
            int valueSecond = nums2[pointerSecond];
            if (valueFirst == valueSecond) {
                return valueFirst;
            } else if (valueFirst < valueSecond) {
                pointerFirst++;
            } else {
                pointerSecond++;
            }
        }
        return -1;
    }
}