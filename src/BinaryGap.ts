// LeetCode 868

// Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n. If there are no two adjacent 1's, return 0.

// Two 1's are adjacent if there are only 0's separating them (possibly no 0's). The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.


function binaryGap(n: number): number {
    let last : number = -1, ans : number = 0;
    for(let i=0; n != 0; ++i){
        if((n & 1) === 1){
            if(last !== -1) ans = Math.max(ans, i - last);
            last = i;
        }

        n >>= 1;
    }
    
    return ans;
};