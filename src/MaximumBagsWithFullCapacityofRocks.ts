// LeetCode 2279

// You have n bags numbered from 0 to n - 1. You are given two 0-indexed integer arrays capacity and rocks. 
// The ith bag can hold a maximum of capacity[i] rocks and currently contains rocks[i] rocks. 
// You are also given an integer additionalRocks, the number of additional rocks you can place in any of the bags.

// Return the maximum number of bags that could have full capacity after placing the additional rocks in some bags.

// function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    
//     const n : number = capacity.length;

//     for(let i=0; i<n; i++){
//         capacity[i] -= rocks[i];
//     }

//     capacity.sort((a,b) => a - b);

//     let count : number = 0;

//     for(let i=0; i<n; i++){
//         additionalRocks -= capacity[i];
//         if(additionalRocks < 0) break;

//         count++;
//     }

//     return count;
// };