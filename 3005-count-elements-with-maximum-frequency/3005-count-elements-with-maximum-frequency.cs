public class Solution {
    public int MaxFrequencyElements(int[] nums) {
        var myDic = new Dictionary<int, int>();
        for(int i = 0; i < nums.Length; i++) {
            if (myDic.ContainsKey(nums[i])) {
                myDic[nums[i]] += 1;
            } else {
                myDic.Add(nums[i], 1);
            }
        }
        int maxOccurrence = 0;
        int numberOfMaxOccurences = 0;
        foreach( KeyValuePair<int, int> kvp in myDic) {
            if (kvp.Value > maxOccurrence) {
                maxOccurrence = kvp.Value;
                numberOfMaxOccurences = 1;
            } else if (kvp.Value == maxOccurrence) {
                numberOfMaxOccurences += 1;
            }
        }
        return maxOccurrence * numberOfMaxOccurences;
    }
}