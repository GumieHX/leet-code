// LeetCode 908

// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

function smallestRangeI(nums: number[], k: number): number {
    let maxI : number = Number.MIN_SAFE_INTEGER, 
        minI : number = Number.MAX_SAFE_INTEGER;
    const n : number = nums.length;

    for(let i=0; i<n; i++){
        maxI = Math.max(maxI,nums[i]);
        minI = Math.min(minI,nums[i]);
    }

    return Math.max(0,(maxI - minI) - 2*k) ;
};