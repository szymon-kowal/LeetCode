public class Solution {
    public string Interpret(string command) {
        StringBuilder answer = new StringBuilder();
        for (int i = 0; i < command.Length; i++) {
           if (command[i] == '(') {
                if (i + 1 < command.Length && command[i + 1] == ')') {
                    answer.Append('o'); 
                    i++; 
                } else {
                    answer.Append("al");
                    i += 3; 
                }
            } else {
                answer.Append(command[i]);
            }
        }
        return answer.ToString();
    }
}