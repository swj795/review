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