class Solution:
    def shortestPalindrome(self, s: str) -> str:
        r = s[::-1]
        for i in range(len(s)+1):
            print(r[i:])
            if s.startswith(r[i:]):
                print("End: ", r[:i])
                return r[:i]+s