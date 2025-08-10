function minPatches(nums: number[], n: number): number {
    let i = 0;
    let upto = 0n; // bigint to avoid precision issues
    let patches = 0;

    while (upto < BigInt(n)) {
        if (i < nums.length && BigInt(nums[i]) <= upto + 1n) {
            upto += BigInt(nums[i]);
            i += 1;
        } else {
            upto += upto + 1n;
            patches += 1;
        }
    }
    return patches;
}