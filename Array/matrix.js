// 顺时针旋转矩阵

function rotate (matrix) {
    const n = matrix.length;
    for(let i = 0; i < Math.floor(n / 2); i++){
        for(let j = 0; j < Math.floor((n+1) / 2);j++){
            let tem = matrix[i][j];
            matrix[i][j] = matrix[n-j-1][i];
            matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
            matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
            matrix[j][n-i-1] = tem;
        }
    }
}