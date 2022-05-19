// LeetCode 462

// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment or decrement an element of the array by 1.

// Test cases are designed so that the answer will fit in a 32-bit integer.


function minMoves2(nums: number[]): number {
    nums.sort((a, b) => a - b);

    const n : number = nums.length;

    let sums : number = 0, x = nums[Math.floor(n/2)];

    for(let i=0; i<n; i++){
        sums += Math.abs(nums[i] - x);
    }

    return sums;
};