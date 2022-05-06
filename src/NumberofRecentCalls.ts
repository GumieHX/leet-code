// LeetCode 933

// You have a RecentCounter class which counts the number of recent requests within a certain time frame.

// Implement the RecentCounter class:

// RecentCounter() Initializes the counter with zero recent requests.
// int ping(int t) Adds a new request at time t, where t represents some time in milliseconds, and returns the number of requests that has happened in the past 3000 milliseconds (including the new request). Specifically, return the number of requests that have happened in the inclusive range [t - 3000, t].
// It is guaranteed that every call to ping uses a strictly larger value of t than the previous call.

class RecentCounter {

    queue : number[];

    // #指针代替队列法
    // left : number;
    // right : number;

    constructor() {
        this.queue = [];

        // #指针代替队列法
        // this.left = 0;
        // this.right = 0;
    }

    ping(t: number): number {

        while(this.queue.length !== 0 && this.queue[0] < t - 3000){
            this.queue.shift();
        }

        this.queue.push(t);

        return this.queue.length;

        // #指针代替队列法
        // this.queue.push(t);
        // this.right++;
        
        // while(this.queue[this.left] < t - 3000){
        //     this.left++;
        // }

        // return this.right - this.left;
    }
}