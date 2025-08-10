class Solution {
    public String shortestPalindrome(String s) {
        String r = new StringBuilder(s).reverse().toString();
        for (int i = 0; i <= s.length(); i++) {
            String suffix = r.substring(i);
            if (s.startsWith(suffix)) {
                return r.substring(0, i) + s;
            }
        }
        return "";
    }
}