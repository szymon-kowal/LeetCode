public class Solution {
    Dictionary<char, char[]> keypad = new Dictionary<char, char[]> {{'2', new char[]{'a', 'b', 'c'}}, 
    {'3', new char[]{'d', 'e', 'f'}}, {'4', new char[] {'g', 'h', 'i'}}, 
    {'5', new char[] {'j', 'k', 'l'}}, {'6', new char[] {'m', 'n', 'o'}}, 
    {'7', new char[] {'p', 'q', 'r', 's'}}, {'8', new char[] {'t', 'u', 'v'}}, 
    {'9', new char[] {'w', 'x', 'y', 'z'}}};
    
    public IList<string> LetterCombinations(string digits) {
        List<string> combinations = new List<string>();
        if (digits.Length > 0) AddCombination("", digits, 0, combinations);
        return combinations;
    }
    
    public void AddCombination(string curr, string digits, int index, List<string> list) {
        if(index >= digits.Length) list.Add(curr);
        else
        {
            char[] map = keypad[digits[index]];

            for(int i = 0; i < map.Length; i++)
            {
                string newCurr = curr + map[i];

                AddCombination(newCurr, digits, index + 1, list);
            }
        }
    }
}