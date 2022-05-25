// LeetCode 2274

// Alice manages a company and has rented some floors of a building as office space. 
// Alice has decided some of these floors should be special floors, used for relaxation only.

// You are given two integers bottom and top, which denote that Alice has rented all the floors from bottom to top (inclusive). 
// You are also given the integer array special, where special[i] denotes a special floor that Alice has designated for relaxation.

// Return the maximum number of consecutive floors without a special floor.

function maxConsecutive(bottom: number, top: number, special: number[]): number {

    special.sort((a,b) => a - b);

    const n : number = special.length;

    let res : number = Math.max(top - special[n-1], special[0] - bottom);

    for(let i=1; i<n; i++){
        res = Math.max(res, special[i] - special[i-1] -1);
    }

    return res;
};