public class Solution {
    public int NumberOfEmployeesWhoMetTarget(int[] hours, int target) {
        int countOfEmployesMettingTarget = 0;
        foreach(int num in hours) {
            if (num >= target) {
                countOfEmployesMettingTarget++;
            }
        }
        return countOfEmployesMettingTarget;
    }
}