// LeetCode 436

// You are given an array of intervals, where intervals[i] = [starti, endi] and each starti is unique.

// The right interval for an interval i is an interval j such that startj >= endi and startj is minimized. Note that i may equal j.

// Return an array of right interval indices for each interval i. If no right interval exists for interval i, then put -1 at index i.

function findRightInterval(intervals: number[][]): number[] {
    const n : number = intervals.length;
    const res : Array<number> = new Array<number>(n).fill(-1);
    const indexList : Array<Array<number>> = new Array(n).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < n; i++) {
        indexList[i][0] = intervals[i][0];
        indexList[i][1] = i;
    }

    indexList.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < n; i++) {
        let left : number = 0, right : number = n - 1;

        let target : number = -1;

        while (left <= right) {
            const mid : number = Math.floor((left + right) / 2);
            if (indexList[mid][0] >= intervals[i][1]) {
                target = indexList[mid][1];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        res[i] = target;
    }

    return res;
};

