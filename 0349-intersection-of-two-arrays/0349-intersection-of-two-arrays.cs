public class Solution {
    public int[] Intersection(int[] nums1, int[] nums2) {
        var myDic = new Dictionary<int, int>();
        foreach(int num in nums1) {
            if (!myDic.ContainsKey(num)) {
                myDic.Add(num, 1);
            }
        }
        var answerList = new List<int>();
        foreach (int num in nums2) {
            if (myDic.ContainsKey(num)) {
                answerList.Add(num);
            }
        }
        return answerList.Distinct().ToArray();
    }
}