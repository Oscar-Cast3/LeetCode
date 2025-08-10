class Solution {
    public int minPatches(int[] nums, int n) {
        int i = 0;
        long upto = 0;
        int patches = 0;
        while (upto < n) {
            if (i < nums.length && nums[i] <= (upto + 1)) {
                upto += nums[i];
                i += 1;
            } else {
                upto += (upto + 1);
                patches += 1;
            }
        }
        return patches;
    }
}