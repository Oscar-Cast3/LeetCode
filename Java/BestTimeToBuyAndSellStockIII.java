class Solution {
    public int maxProfit(int[] prices) {
        int[][] dp = new int[2][prices.length];

        int minElement = prices[0];
        for(int i = 1; i < prices.length; i++){
            dp[0][i] = Math.max(dp[0][i-1], prices[i] - minElement);
            minElement = Math.min(minElement, prices[i]);
        }

        minElement = prices[2%prices.length];
        for(int i = 2; i < prices.length; i++){
            dp[1][i] = Math.max(dp[1][i-1], prices[i] - minElement);
            minElement = Math.min(minElement, prices[i] - dp[0][i-1]);
        }

        return Math.max(dp[1][prices.length-1],dp[0][prices.length-1]);
    }
}