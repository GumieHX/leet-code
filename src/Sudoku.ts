// 校验行
const checkRows = (matrix : number[][], i : number, j : number, num : number) : boolean => {
    for(let k=0; k < matrix[i-1].length; k++) {
        if(matrix[i-1][k] === num) {
            return false;
        }
    }
    return true;
};

// 校验列
const checkCol = (matrix : number[][], i : number, j : number, num : number) : boolean => {
    for(let k=0; k < matrix.length; k++) {
        if(matrix[k][j-1] === num) {
            return false;
        }
    }
    return true;
};

const check3by3 = (matrix : number[][], i : number, j : number, num : number) : boolean => {
    const block_row = Math.floor((i-1) / 3) + 1;
    const block_col = Math.floor((j-1) / 3) + 1;

    const row_start : number = block_row * 3 - 1;
    const col_start : number = block_col * 3 - 1;

    for(let k=0; k < 3; k++) {
        for(let l=0; l < 3; l++){
            if(matrix[row_start - k][col_start - l] === num) return false;
        }
    }

    return true;
};

const checkCell = (matrix : number[][], i : number, j : number, num : number) : boolean => {
    return checkRows(matrix, i, j, num) && checkCol(matrix, i, j, num) && check3by3( _matrix, i, j, num);
};

const solve = (matrix1 : number[][], index : number) : void => {

    const matrix : number[][] = [];

    for(let i =0; i< 9; i++){
        matrix.push(matrix1[i].concat([]));
    }

    if(index > 81){
        console.log(matrix);
    }else{
        const _row = Math.floor((index -1) / 9);
        const _col = (index - 1) % 9;

        if(matrix[_row][_col] !== 0){
            solve(matrix, index + 1);
        }else{
            for(let i=0; i<9; i++){
                if(checkCell(matrix,_row+1,_col+1,i+1)){
                    matrix[_row][_col] = i+1;
                    solve(matrix, index + 1);
                }
            }
        }

    }
};

const _matrix : number[][] = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0], 
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

solve(_matrix,1);