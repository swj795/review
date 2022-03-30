// dp 实现斐波那契数列
function fib(n){
    if(n < 2) {
        return n;
    }
    let q = 0,p = 1, r = 1
    for(let i = 2; i <= n; i++){
        q = p;
        p = r;
        r = p + q; 
    }
    return r
}

console.log(fib(4));


// 爬楼梯  70
// 共有n阶台阶，一次爬一阶或两阶
// 输入n 输出最小要爬多少次
function climbStairs(n) {
    const dp = new Array(n+1);
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2;i <= n;i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

console.log(climbStairs(5));

// 爬楼梯花费最小费用 746
// 楼梯长度是输入数组的长度，每次爬楼所花费是就数组i的值
function minCostClimbingStairs(cost) {
    let n = cost.length;
    const dp = new Array(n+1);
    // 第一次爬楼梯不需要花费，可以从0或者1开始
    dp[0] = 0;
    dp[1] = 0;
    for(let i = 2;i <= n;i++){
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
    }
    return dp[n]
}

const cost = [10,15,20];
console.log(minCostClimbingStairs(cost));