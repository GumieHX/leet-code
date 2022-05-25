// LeetCode 2280

// You are given a 2D integer array stockPrices where stockPrices[i] = [dayi, pricei] indicates the price of the stock on day dayi is pricei. 
// A line chart is created from the array by plotting the points on an XY plane with the X-axis representing the day and 
// the Y-axis representing the price and connecting adjacent points. One such example is shown below:

function minimumLines(stockPrices: number[][]): number {
    if (!stockPrices || stockPrices.length == 0) return 0;

    let ans = 0;
    let slop = [1, 0];

    stockPrices.sort((a, b) => a[0] - b[0]);

    let prev = 0, next = 1; 

    while (next < stockPrices.length) {
        let [di, pi] = stockPrices[prev];
        let [dj, pj] = stockPrices[next];

        let temp = [(pj - pi), (dj - di)];

        if (BigInt(temp[1]) * BigInt(slop[0]) != BigInt(temp[0]) * BigInt(slop[1])) {
            ans++;
            slop = temp;
        }
        next++;
        prev++;
    }

    return ans;
};