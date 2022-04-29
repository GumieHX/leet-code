// LeetCode 20

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

function isValid(s: string): boolean {
    let n : number = s.length;

    if(n % 2 !== 0) return false;

    const stack : string[] = [];

    const _map : Map<string,string> = new Map([
        [')','('],
        ['}','{'],
        [']','[']
    ]);

    for(let i =0; i< n; i++){
        const _char : string = s[i];

        if(_map.has(_char)){
            if(!stack.length || stack.pop() !== _map.get(_char)) return false;
        }else{
            stack.push(_char);
        }
    }

    return !stack.length;
};