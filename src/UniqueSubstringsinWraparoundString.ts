// LeetCode 467

// We define the string s to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so s will look like this:

// "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".
// Given a string p, return the number of unique non-empty substrings of p are present in s.

function findSubstringInWraproundString(p: string): number {
    const dp : number[] = new Array(26).fill(0);
    let cur : number = 1;

    dp[p.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;

    for(let i = 1; i < p.length; i++) {

        ( p.charCodeAt(i) - p.charCodeAt(i-1) + 25 ) % 26 === 0 ? cur++ : cur = 1;

        const index : number = p.charCodeAt(i) - 'a'.charCodeAt(0);
        dp[index] = Math.max(dp[index],cur);
    }

    return dp.reduce((a, b) => a + b);
};