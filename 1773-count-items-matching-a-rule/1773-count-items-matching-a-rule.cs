public class Solution {
    public int CountMatches(IList<IList<string>> items, string ruleKey, string ruleValue) {
        Dictionary<string, int> mapRuleToNumber = new() {
            {"type", 0},
            {"color", 1},
            {"name", 2}
        };
        return items.Count(item => item[mapRuleToNumber[ruleKey]] == ruleValue);
    }
}