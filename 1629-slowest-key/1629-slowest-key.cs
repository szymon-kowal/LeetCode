public class Solution {
    public char SlowestKey(int[] releaseTimes, string keysPressed) {
        int n = keysPressed.Length;
        int maxDuration = releaseTimes[0];
        char resultKey = keysPressed[0];

        for (int i = 1; i < n; i++) {
            int currentDuration = releaseTimes[i] - releaseTimes[i - 1];
            if (currentDuration > maxDuration 
                || (currentDuration == maxDuration 
                    && keysPressed[i] > resultKey)) {
                maxDuration = currentDuration;
                resultKey = keysPressed[i];
            }
        }

        return resultKey; 
    }
}