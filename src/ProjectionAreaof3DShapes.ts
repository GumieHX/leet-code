// LeetCode 833

// You are given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-aligned with the x, y, and z axes.

// Each value v = grid[i][j] represents a tower of v cubes placed on top of the cell (i, j).

// We view the projection of these cubes onto the xy, yz, and zx planes.

// A projection is like a shadow, that maps our 3-dimensional figure to a 2-dimensional plane. We are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

// Return the total area of all three projections.

function projectionArea(grid: number[][]): number {
    const n : number = grid.length;
    let xyArea : number = 0, yzArea : number = 0, zxArea : number = 0;

    for (let i = 0; i < n; i++) {
        let yzHeight : number = 0, zxHeight : number = 0;
        for (let j = 0; j < n; j++) {
            xyArea += grid[i][j] > 0 ? 1 : 0;
            yzHeight = Math.max(yzHeight, grid[i][j]);
            zxHeight = Math.max(zxHeight, grid[j][i]);
        }
        yzArea += yzHeight;
        zxArea += zxHeight;
    }
    return xyArea + yzArea + zxArea;
};