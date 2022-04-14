// LeetCode 1672

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
// Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. 
// The richest customer is the customer that has the maximum wealth.

function maximumWealth(accounts: number[][]): number {

    let maxWealth : number = Number.MIN_VALUE;

    for(const account of accounts){
        maxWealth = Math.max(maxWealth, account.reduce((a,b) => a + b));
    }

    return maxWealth;
}
