// LeetCode 780

// Given four integers sx, sy, tx, and ty, return true if it is possible to convert the point (sx, sy) to the point (tx, ty) through some operations, or false otherwise.

// The allowed operation on some point (x, y) is to convert it to either (x, x + y) or (x + y, y).

function reachingPoints(sx: number, sy: number, tx: number, ty: number): boolean {
    // 当t(x,y)中有任何一个坐标大于s(x,y)时，一直用x,y中较大的值去减去较小的值反推出上一轮的x,y值
    while (tx > sx && ty > sy && tx != ty) {
        tx > ty ? tx %= ty : ty %= tx;
    }

    if (tx === sx && ty === sy) {
        return true;
    } else if (tx === sx) {
        return ty > sy && (ty - sy) % tx === 0;
    } else if (ty === sy) {
        return tx > sx && (tx - sx) % ty === 0;
    } else {
        return false;
    }
};