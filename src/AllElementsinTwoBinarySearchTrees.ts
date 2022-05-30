// LeetCode 1305

// Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// class TreeNode {
//     val : number;
//     left : TreeNode | null;
//     right : TreeNode | null;
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//         this.val = (val === undefined ? 0 : val);
//         this.left = (left === undefined ? null : left);
//         this.right = (right === undefined ? null : right);
//     }
// }

 function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {

    const list1 : number[] = [], list2 : number[] = [];

    const _bfs = (node : TreeNode, list : number[]) : void => {
        if(!node) return;

        _bfs(node.left, list);
        list.push(node.val);
        _bfs(node.right, list);
    }

    _bfs(root1, list1);
    _bfs(root2, list2);

    const rtnlist : number[] = [];

    const _len1 : number = list1.length,
          _len2 : number = list2.length;

    let i = 0, j = 0;

    while(i < _len1 || j < _len2){
        if(i === _len1){
            for(let k=j; k<_len2; k++){
                rtnlist.push(list2[k]);
            }
            break;
        }else if (j === _len2){
            for(let k=i; k<_len1; k++){
                rtnlist.push(list1[k]);
            }
            break;
        }else if (list1[i] > list2[j]){
            rtnlist.push(list2[j]);
            j++;
        }else{
            rtnlist.push(list1[i]);
            i++;
        }
    }

    return rtnlist;


    // const rtnlist : number[] = list1.concat(list2);

    // return rtnlist.sort((a,b) => a-b);
};