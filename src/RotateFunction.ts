// LeetCode 396

// You are given an integer array nums of length n.

// Assume arrk to be an array obtained by rotating nums by k positions clock-wise. We define the rotation function F on nums as follow:

// F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1].
// Return the maximum value of F(0), F(1), ..., F(n-1).

// The test cases are generated so that the answer fits in a 32-bit integer.

function maxRotateFunction(nums: number[]): number {

    const n : number = nums.length;
    const numSum : number = nums.reduce((a,b) => a+b);

    let _f : number = 0;

    for(let i=0; i < n; i++){
        _f += i * nums[i];
    }

    let res = _f;

    for(let i= n-1; i>0; i--){
        _f += numSum - n * nums[i];
        res = Math.max(res,_f);
    }

    return res;
};