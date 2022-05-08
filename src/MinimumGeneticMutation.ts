// LeetCode 433

// A gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'.

// Suppose we need to investigate a mutation from a gene string start to a gene string end where one mutation is defined as one single character changed in the gene string.

// For example, "AACCGGTT" --> "AACCGGTA" is one mutation.
// There is also a gene bank bank that records all the valid gene mutations. A gene must be in bank to make it a valid gene string.

// Given the two gene strings start and end and the gene bank bank, return the minimum number of mutations needed to mutate from start to end. If there is no such a mutation, return -1.

// Note that the starting point is assumed to be valid, so it might not be included in the bank.

function minMutation(start: string, end: string, bank: string[]): number {
    if(start === end) return 0;
    if(!bank.includes(end)) return -1;

    const visitedSet : Set<string> = new Set<string> ();

    let count : number = 1;
    let quene : string[] = [start];

    while(quene.length){
        const _list : string[] = quene.concat([]);
        quene = [];

        while(_list.length){
            const _curr : string = _list.shift();

            for(let i=0;i < bank.length; i++){
                if(visitedSet.has(bank[i])) continue;

                if(isEnableChange(_curr, bank[i])){
                    visitedSet.add(bank[i]);
                    quene.push(bank[i]);
                }
            }
        }

        if(quene.includes(end)) return count;
        count++;
    }

    return -1;
};

const isEnableChange = (str1 : string, str2 : string) : boolean => {
    let _count = 0;

    for(let i=0; i< 8; i++){
        if(str1[i] !== str2[i]) _count++;
    }

    return _count === 1;
}