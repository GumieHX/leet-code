// LeetCode 713

// Given an array of integers nums and an integer k, 
// return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

function numSubarrayProductLessThanK(nums: number[], k: number): number {

    if(k <= 1) return 0;

    const n : number = nums.length;

    let left_point : number = 0, right_point : number = 0;

    let mul : number = 1, count : number = 0;

    while(right_point < n){
        mul *= nums[right_point];

        while(mul >= k){
            mul /= nums[left_point];
            left_point++;
        }

        count += right_point - left_point + 1;

        right_point++;
    }

    return count;
};