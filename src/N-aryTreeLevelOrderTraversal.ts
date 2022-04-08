// LeetCode 429
// Given an n-ary tree, return the level order traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal,
// each group of children is separated by the null value (See examples).

class Lever_Node {
    val : number;
    children : Lever_Node[];
    constructor(val? : number){
        this.val = (val === undefined) ? 0 : val;
        this.children = [];
    }

}

function levelOrder(root: Lever_Node | null): number[][] {
	if(!root) return [];

    let ans : number[][] = [], quene : Lever_Node[] = [root];

    while(quene.length){
        const n = quene.length;
        const level : number[] = [];

        for (let i = 0; i < n; ++i) {
            const _currNode = quene.shift();
            level.push(_currNode.val);
            for (const child of _currNode.children) {
                quene.push(child);
            }
        }
        ans.push(level);
    }

    return ans;
};
