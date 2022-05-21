// LeetCode 961

// You are given an integer array nums with the following properties:

// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

function repeatedNTimes(nums: number[]): number {
    const _set : Set<number> = new Set<number>();
    const n : number = nums.length;

    for(let i=0; i<n; i++){
        if(_set.has(nums[i])) return nums[i];

        _set.add(nums[i]);
    }
};