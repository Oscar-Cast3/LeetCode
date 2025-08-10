function shortestPalindrome(s: string): string {
    const r = s.split('').reverse().join('');

    for (let i = 0; i <= s.length; i++) {
        const suffix = r.substring(i);

        if (s.startsWith(suffix)) {
            return r.substring(0, i) + s;
        }
    }

    return "";
};