public class Solution {
    public int FindLeastNumOfUniqueInts(int[] arr, int k) {
        var map = new Dictionary<int, int>();
        foreach(int val in arr) {
            if (map.ContainsKey(val)){
                map[val] += 1;
            } else {
                map.Add(val, 1);
            }
        }
        int[] valArr = map.Values.ToArray();
        
        Array.Sort(valArr);
        
        int elementsRemoved = 0;
        for (int i = 0; i < valArr.Length && k > 0; i++) {
            if (k >= valArr[i]) {
                k -= valArr[i];
                elementsRemoved++;
            } else {
                break;
            }
        }

        return valArr.Length - elementsRemoved;
    }
}