// Leetcode 442

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

function findDuplicates(nums: number[]): number[] {
    // 常规思路：
    //   1. 排序，排序完之后遍历和右边的元素对比，相同入res数组 -> 但是排序的时间复杂度不是O(n)
    //   2. 一次遍历使用set做visited值记录，当新值在set中存在的时候入res数组 -> set的额外空间不是常量级的


    // @param list 被交换的数组
    // @param index1 需要交换的下标1
    // @param index2 需要交换的下标2
    // @return void 无需返回值
    // const swap = (list : number[], index1 : number, index2 : number) : void => {
    //     const _temp = list[index1];
    //     list[index1] = list[index2];
    //     list[index2] = _temp;
    // }

    // const n : number = nums.length;

    // if(n === 1) return [];

    // for(let i=0; i< n; i++){
    //     while (nums[i] != nums[nums[i] - 1]) {
    //         swap(nums, i, nums[i] - 1);
    //     }
    // }

    // const ans : number[] = [];

    // for(let i=0; i<n; i++){
    //       if(nums[i] - 1 !== i) ans.push(nums[i]);
    // }

    // return ans;

    const n : number = nums.length;
    const ans : number[] = [];

    if(n === 1) return [];

    for(let i=0; i< n; i++){
        const _val = Math.abs(nums[i]);
        nums[_val - 1] > 0 ? nums[_val - 1] *= -1 : ans.push(_val);
    }

    return ans;

};