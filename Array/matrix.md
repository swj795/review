矩阵顺时针旋转
第i行j列的元素 旋转之后成为 倒数第i列j行元素

~~~js
// 每一次旋转都根据
旋转之后    旋转之前
row =      col
col =      n - row -1


matrix[i][j] 旋转之后 matrix[j][n-i-1]
matrix[j][n-i-1]  旋转之后 matrix[n-i-1][n-j-1]
matrix[n-i-1][n-j-1]  旋转之后 matrix[n-j-1][i]
matrix[n-j-1][i]   旋转之后 matrix[i][j]

写代码时得反过来写
~~~

对角线特点 i+j 恒定 所以一般将 i+j 作为 key 来分桶 总之要关注 i,j 有什么定值关系