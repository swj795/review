// // 顺时针旋转矩阵

// function rotate (matrix) {
//     const n = matrix.length;
//     for(let i = 0; i < Math.floor(n / 2); i++){
//         for(let j = 0; j < Math.floor((n+1) / 2);j++){
//             let tem = matrix[i][j];
//             matrix[i][j] = matrix[n-j-1][i];
//             matrix[n-j-1][i] = matrix[n-i-1][n-j-1];
//             matrix[n-i-1][n-j-1] = matrix[j][n-i-1];
//             matrix[j][n-i-1] = tem;
//         }
//     }
// }

// // 面试题01.08 零矩阵
// function setZeroes(matrix) {
//     const m = matrix.length,n = matrix[0].length;
//     const row = new Array(m).fill(false);
//     const col = new Array(n).fill(false);

//     for(let i = 0; i < m; i++){
//         for(let j = 0; j < n; j++){
//             if(matrix[i][j] === 0){
//                 row[i] = col[j] = true;
//             }
//         }
//     }

//     for(let i = 0; i < m; i++){
//         for(let j = 0; j < n; j++){
//             if(row[i] || col[j]){
//                 matrix[i][j] =  0;
//             }
//         }
//     }
// }


// 对角线遍历
function findDiagonalOrder (mat) {
    const m = mat.length,n = mat[0].length;
    // 用一个map来记录矩阵的对角线上的元素
    const record = new Map();

    // 遍历矩阵，将对角线的元素以数组的形式记录到map中
    for(let i = 0;i < m; i++){
        for(let j = 0;j < n;j++){
            const k = i + j;
            // map以对角线为key，存入一个数组
            if(!record.has(k))record.set(k,[]);
            // 将对角线上的元素添加进去
            record.get(k).push(mat[i][j])
        }
    }

    // 用来记录答案
    const res = []

    //  遍历map 取出map中的值,k,val 从map中解构 k代表key val 代表key对应的value
    for(const [k,val] of record){
        // val是一个数组，push前先展开
        k % 2 === 1 ? res.push(...val):res.push(...val.reverse()) 
    }
}

findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]])