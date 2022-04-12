// LeetCode 806
// You are given a string s of lowercase English letters and an array widths denoting how many pixels wide each lowercase English letter is. Specifically, widths[0] is the width of 'a', widths[1] is the width of 'b', and so on.

// You are trying to write s across several lines, where each line is no longer than 100 pixels. Starting at the beginning of s, write as many letters on the first line such that the total width does not exceed 100 pixels. Then, from where you stopped in s, continue writing as many letters as you can on the second line. Continue this process until you have written all of s.

// Return an array result of length 2 where:

// result[0] is the total number of lines.
// result[1] is the width of the last line in pixels.

function numberOfLines(widths: number[], s: string): number[] {

    // let _len : number = 0;
    // const _base : number = 'a'.charCodeAt(0);
    // for (var i = 0; i < s.length; i++) {

    //     const _lessHun : number = _len % 100;
    //     let _val : number = widths[s[i].charCodeAt(0) - _base];

    //     if(_lessHun + _val > 100) _val += 100 - _lessHun;

    //     _len += _val;
    // }
    // return [Math.ceil(_len / 100), _len === 100 ? 100 : _len % 100];

    let _len : number = 0, _row = 1;
    const _base : number = 'a'.charCodeAt(0);
    const MAX_LEN = 100;

    for (var i = 0; i < s.length; i++) {
        const _val = widths[s[i].charCodeAt(0) - _base];
        _len += _val;
        if(_len > MAX_LEN){
            _row++;
            _len = _val;
        }
    }
    return [_row,_len];
};