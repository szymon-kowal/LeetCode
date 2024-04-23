public class Solution {
    public int[] ArrayRankTransform(int[] arr) {
        int[] sortedArr = (int[]) arr.Clone();
        Array.Sort(sortedArr);
        Dictionary<int, int> rankDict = new();
        int rank = 1;
        foreach(int num in sortedArr) {
            if (!rankDict.ContainsKey(num)) {
              rankDict[num] = rank++;  
            }
        }
        
        for(int i = 0; i < arr.Length; i++) {
            arr[i] = rankDict[arr[i]];
        }
        
        return arr;
    }
}