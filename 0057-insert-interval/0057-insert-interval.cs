public class Solution {
    public int[][] Insert(int[][] intervals, int[] newInterval) {
        List<int[]> answerList = new();
        int intervalsLength = intervals.Length;
        int index = 0;
        
        while (index < intervalsLength && intervals[index][1] < newInterval[0]) {
            answerList.Add(intervals[index++]);
        }
        while (index < intervalsLength && newInterval[1] >= intervals[index][0]) {
            newInterval[0] = Math.Min(newInterval[0], intervals[index][0]);
            newInterval[1] = Math.Max(newInterval[1], intervals[index][1]);
            index++;
        }
        answerList.Add(newInterval);
        
        while (index < intervalsLength) {
            answerList.Add(intervals[index++]);
        }
        
        return answerList.ToArray();
    }
}