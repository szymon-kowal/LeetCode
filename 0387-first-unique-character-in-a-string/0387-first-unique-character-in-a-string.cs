public class Solution {
    public int FirstUniqChar(string s) {
        var storage = new Dictionary<char, (int count, int firstIndex)>();
        int index = 0;
        foreach (char stringChar in s) {
            if (storage.ContainsKey(stringChar)) {
                storage[stringChar] = (storage[stringChar].count + 1, storage[stringChar].firstIndex);
            } else {
                storage.Add(stringChar,(1,index));
            }
            index++;
        }
        
        foreach (var kvp in storage) {
            if (kvp.Value.count == 1) {
                return kvp.Value.firstIndex;
            }
        }
        return -1;
    }
}