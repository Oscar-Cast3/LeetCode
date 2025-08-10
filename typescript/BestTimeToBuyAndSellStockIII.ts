function maxProfit(prices: number[]): number {
    const n = prices.length;
    const dp: number[][] = [
        new Array(n).fill(0),
        new Array(n).fill(0),
    ];

    let minElement = prices[0];
    for (let i = 1; i < n; i++) {
        dp[0][i] = Math.max(dp[0][i - 1], prices[i] - minElement);
        minElement = Math.min(minElement, prices[i]);
    }

    minElement = prices[2 % n];
    for (let i = 2; i < n; i++) {
        dp[1][i] = Math.max(dp[1][i - 1], prices[i] - minElement);
        minElement = Math.min(minElement, prices[i] - dp[0][i - 1]);
    }

    return Math.max(dp[1][n - 1], dp[0][n - 1]);
};