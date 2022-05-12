// LeetCode 944 

// You are given an array of n strings strs, all of the same length.

// The strings can be arranged such that there is one on each line, making a grid. For example, strs = ["abc", "bce", "cae"] can be arranged as:

// abc
// bce
// cae
// You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

// Return the number of columns that you will delete.

function minDeletionSize(strs: string[]): number {

    const n : number = strs.length;
    const _col : number = strs[0].length;

    let count : number = 0;

    for(let j=0; j< _col; j++){
        for(let i=1; i< n; i++){
            if(strs[i -1][j] > strs[i][j]){
                count++;
                break;
            }
        }
    }

    return count;
};