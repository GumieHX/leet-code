// LeetCode 385

// Given a string s represents the serialization of a nested list, 
// implement a parser to deserialize it and return the deserialized NestedInteger.

// Each element is either an integer or a list whose elements may also be integers or other lists.

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

class NestedInteger {
    constructor(value ?: number){

    }

    add(ele : NestedInteger){

    }
}

 function deserialize(s: string): NestedInteger {

    if(s[0] !== '[') return new NestedInteger(parseInt(s));

    const stack = [], n : number = s.length;
    let num : number = 0, negative : boolean = false;

    for (let i = 0; i < n; i++) {
        const c = s[i];
        if (c === '-') {
            negative = true;
        } else if (isDigit(c)) {
            num = num * 10 + c.charCodeAt(0) - '0'.charCodeAt(0);
        } else if (c === '[') {
            stack.push(new NestedInteger());
        } else if (c === ',' || c === ']') {
            if (isDigit(s[i - 1])) {
                if (negative) {
                    num *= -1;
                }
                stack[stack.length - 1].add(new NestedInteger(num));
            }
            num = 0;
            negative = false;
            if (c === ']' && stack.length > 1) {
                const ni = stack.pop();
                stack[stack.length - 1].add(ni);
            }
        }
    }
    return stack.pop();
};

const isDigit = (ch : string) : boolean  => {
    return parseFloat(ch).toString() === "NaN" ? false : true;
}