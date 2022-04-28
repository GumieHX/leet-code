// LeetCode 417

// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

function pacificAtlantic(heights: number[][]): number[][] {
    const dirs : number[][] = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const m : number = heights.length,  n : number = heights[0].length;

    const pacific = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const atlantic = new Array(m).fill(0).map(() => new Array(n).fill(0));

    const dfs = (row, col, ocean) => {
        if (ocean[row][col]) {
            return;
        }
        ocean[row][col] = true;
        for (const dir of dirs) {
            const newRow = row + dir[0], newCol = col + dir[1];
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && heights[newRow][newCol] >= heights[row][col]) {
                dfs(newRow, newCol, ocean);
            }
        }
    };

    for (let i = 0; i < m; i++) {
        dfs(i, 0, pacific);
    }
    for (let j = 1; j < n; j++) {
        dfs(0, j, pacific);
    }
    for (let i = 0; i < m; i++) {
        dfs(i, n - 1, atlantic);
    }
    for (let j = 0; j < n - 1; j++) {
        dfs(m - 1, j, atlantic);
    }

    const result = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) result.push([i,j]);
        }
    }
    
    return result;
};