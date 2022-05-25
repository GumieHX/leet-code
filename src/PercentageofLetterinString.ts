// LeetCode 2278

// Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.

function percentageLetter(s: string, letter: string): number {
    const n : number = s.length;
    let count : number = 0;

    for(let i=0; i<n; i++){
        if(s[i] === letter) count++;
    }

    return Math.floor((count / n) * 100);
};