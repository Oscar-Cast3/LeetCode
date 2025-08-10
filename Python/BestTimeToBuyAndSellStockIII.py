class Solution(object):
    def maxProfit(self, prices):
        n = len(prices)
        dp = [[0] * n for _ in range(2)]

        min_element = prices[0]
        for i in range(1, n):
            dp[0][i] = max(dp[0][i - 1], prices[i] - min_element)
            min_element = min(min_element, prices[i])

        min_element = prices[2 % n]
        for i in range(2, n):
            dp[1][i] = max(dp[1][i - 1], prices[i] - min_element)
            min_element = min(min_element, prices[i] - dp[0][i - 1])

        return max(dp[1][-1], dp[0][-1])
        