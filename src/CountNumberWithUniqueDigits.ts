// LeetCode 357
// Given an integer n, return the count of all numbers with unique digits, x, where 0 <= x < 10n.

function countNumbersWithUniqueDigits(n: number): number {

    if(n === 0 || n === 1) return Math.pow(10,n);

    let res : number = 10, cur : number = 9;
    for(let i=0; i< n-1; i++){
        cur *= 9-i;
        res += cur;
    }

    return res;
};