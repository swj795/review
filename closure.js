/**
 * 闭包：一个函数能够调用别的函数的变量，那么这个函数称为闭包
 */

function init (){
    const a = 1;
    function closure() {
        console.log(a);
    }
}

// 面试题 
for(var i = 0;i < 5;i++){
    setTimeout(()=>{
        console.log(i);
    },i * 100)
} 
// 由于setTimeout是异步 等循环结束才会输出 此时i为5 所以输出 5 5 5 5 5

// 用闭包解决这个问题
for(var i = 0;i < 5;i++){
    (function(j){
        setTimeout(()=>{
            console.log(j);
        },j * 100)
    })(i);
}
// 利用闭包解决此问题 里面嵌套了一个立即执行函数 将i变量保存下来

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, i *100)
}