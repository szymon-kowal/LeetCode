public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        var group = new Dictionary<string, IList<string>>();
        for (int i = 0; i < strs.Length; i++) {
            char[] characters = strs[i].ToArray();
            Array.Sort(characters);
            string sortedStr = new string(characters);
            if (group.ContainsKey(sortedStr)) {
                group[sortedStr].Add(strs[i]);
            } else {
                group[sortedStr] = new List<string>{strs[i]};
            }
        }
        return group.Values.ToList();
    }
}