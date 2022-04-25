// LeetCode 398

// Given an integer array nums with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the array nums.
// int pick(int target) Picks a random index i from nums where nums[i] == target. If there are multiple valid i's, then each index should have an equal probability of returning.

class Solution {

    // 方法1 哈希表

    // _map : Map<number,number[]> = new Map<number,number[]>();

    // constructor(nums: number[]) {
    //     for(let i=0 ; i< nums.length; i++){
    //         this._map.has(nums[i]) ? this._map.get(nums[i]).push(i) : this._map.set(nums[i],[i]);
    //     }
    // }

    // pick(target: number): number {
    //     let _list : number[] = this._map.get(target);
    //     const _n : number = _list.length;
    //     const random = Math.floor(Math.random() * _n);

    //     return _list[random];
    // }

    // 方法二 水库抽样

    _nums : number[] = [];
    _n : number = 0;

    constructor(nums: number[]) {
        this._nums = nums;
        this._n = nums.length;
    }

    pick(target : number) : number {
        let ans : number = 0, cnt : number = 0;

        for(let i=0; i<this._n; i++){
            if(this._nums[i] === target){
                ++cnt;
                if(Math.floor(Math.random() * cnt) === 0) ans = i;
            }
        }

        return ans;
    }
}