// LeetCode 675

// You are asked to cut off all the trees in a forest for a golf event. The forest is represented as an m x n matrix. In this matrix:

// 0 means the cell cannot be walked through.
// 1 represents an empty cell that can be walked through.
// A number greater than 1 represents a tree in a cell that can be walked through, and this number is the tree's height.
// In one step, you can walk in any of the four directions: north, east, south, and west. If you are standing in a cell with a tree, you can choose whether to cut it off.

// You must cut off the trees in order from shortest to tallest. When you cut off a tree, the value at its cell becomes 1 (an empty cell).

// Starting from the point (0, 0), return the minimum steps you need to walk to cut off all the trees. If you cannot cut off all the trees, return -1.

// You are guaranteed that no two trees have the same height, and there is at least one tree needs to be cut off.

function cutOffTree(forest: number[][]): number {
    
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const m : number = forest.length;
    const n : number = forest[0].length;

    // 按照高度排序树    - Start -

    // treeList -> [heigth,x,y];
    const _treeList : number[][] = [];

    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            if(forest[i][j] <= 1) continue;

            _treeList.push([forest[i][j],i,j]);
        }
    }

    _treeList.sort((a, b) => a[0] - b[0]);

    // 从高到低排序完成    - End -

    // 搜索算法bfs  - Start -

    const _bfs = (forest : number[][], sx : number, sy : number, tx : number, ty : number) : number => {
        if(sx === tx && sy === ty) return 0;

        const row : number = forest.length;
        const col : number = forest[0].length;

        let step : number = 0;

        const queue : number[][] = [];
        const visited : number[][] | boolean[][] =  new Array(row).fill(0).map(() => new Array(col).fill(0));

        queue.push([sx,sy]);
        visited[sx][sy] = true;

        while(queue.length){
            step++;
            const sz : number = queue.length;
            for (let i = 0; i < sz; ++i) {
                const [cx, cy] = queue.shift();
                for (let j = 0; j < 4; ++j) {
                    const nx = cx + dirs[j][0];
                    const ny = cy + dirs[j][1];
                    if (nx >= 0 && nx < row && ny >= 0 && ny < col) {
                        if (!visited[nx][ny] && forest[nx][ny] > 0) {
                            if (nx === tx && ny === ty) {
                                return step;
                            }
                            queue.push([nx, ny]);
                            visited[nx][ny] = true;
                        }
                    }
                }
            }
        }

        return -1;
    }

    // - End -
    let steps : number = 0;
    let cx : number = 0, cy : number = 0;

    for(let i=0; i< _treeList.length; i++){
        let step = _bfs(forest, cx, cy, _treeList[i][1],_treeList[i][2]);
        if(step === -1) return -1;
        steps += step;
        cx = _treeList[i][1];
        cy = _treeList[i][2];
    }

    return steps;
};