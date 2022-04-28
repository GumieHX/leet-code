// LeetCode 905

// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

function sortArrayByParity(nums: number[]): number[] {
    const n : number = nums.length;
    const res : number[] = new Array(n).fill(0);

    let left = 0, right = n - 1;

    for (const num of nums) {
        num % 2 === 0 ? res[left++] = num : res[right--] = num;
    }
    
    return res;
};