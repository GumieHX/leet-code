// LeetCode

// You have a large text file containing words. 
// Given any two different words, find the shortest distance (in terms of number of words) between them in the file. 

// If the operation will be repeated many times for the same file (but different pairs of words), can you optimize your solution?

function findClosest(words: string[], word1: string, word2: string): number {
    const n : number = words.length;

    let ans : number = n;

    let index1 : number = -1, index2 : number = -1;

    for (let i = 0; i < n; i++) {
        const word : string = words[i];
        if (word === word1) {
            index1 = i;
        } else if (word === word2) {
            index2 = i;
        }

        if(index1 >= 0 && index2 >= 0) ans = Math.min(ans, Math.abs(index1 - index2));
    }

    return ans;
};

// 进阶优化，如果操作存在多次而且单词不同，则需要维护一个哈希map来记录按增序排列的下标数组