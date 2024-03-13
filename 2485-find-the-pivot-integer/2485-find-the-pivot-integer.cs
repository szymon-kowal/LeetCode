public class Solution {
    public int PivotInteger(int n)
	{
        if(n == 1) {
            return 1;
        }

        int totalSum = (n * (n + 1)) / 2;
        
        for(int i = 2; i <= n; i++) {
            int currentSum = (i * (i + 1)) / 2;

            if((currentSum - i) == (totalSum - currentSum)) {
                return i;
            }
		}

        return -1;
	}
}