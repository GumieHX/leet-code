// LeetCode 796
// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.


function rotateString(s: string, goal: string): boolean {

    // 暴力法 循环去判断
    // if(s.length !== goal.length) return false;

    // const n : number = s.length, _s : string[] = s.split("");

    // for(let i=0; i<n; i++) {
    //     if(goal === _s.join("")) return true;

    //     _s.push(_s.shift());
    // }

    // return false;

    // 暴力法循环优化 当第一位不相等时跳过比较
    // if(s.length !== goal.length) return false;

    // const n : number = s.length, _s : string[] = s.split("");

    // for(let i=0; i< n; i++){

    //     if(_s[0] === goal[0] && goal === _s.join("")) return true
        
    //     _s.push(_s.shift());
    // }

    // return false;


    // 一行代码 因为如果s可以通过旋转的到goal 那么s+s中必定包含goal
    return s.length === goal.length && (s+s).includes(goal);
};