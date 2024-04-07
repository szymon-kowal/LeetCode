public class Solution {
    public IList<int> FindWordsContaining(string[] words, char x) {
        List<int> answer = new List<int>();
        for (int i = 0; i < words.Length; i++) {
            char[] arr = words[i].ToCharArray();
            for (int j = 0; j < arr.Length; j++) {
                if (arr[j] == x) {
                    answer.Add(i);
                    break;
                }
            }
        }
        return answer;
    }
}