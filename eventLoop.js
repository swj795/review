/**
 * eventLoop
 * 1、先执行同步代码
 * 2、执行微任务
 * 3、执行宏任务 
 */

/**
 * 微任务
 * promise的回调
 * node中的process.nextTick
 * 对dom监听的MutationObserver
 */

/**
 * 宏任务
 * script脚本执行
 * setTimeout
 * setInterval
 * setImmediate(node环境)
 * requestAnimationFrame
 * I/O操作
 * ui渲染
 */

// ex1
console.log('script start'); // 1
setTimeout(() => console.log('setTimeout'),0); // 3
console.log('script end'); // 2

// ex2
console.log('script start'); 
let promise = new Promise(function (resolve){
    console.log('promise1');
    resolve();
    console.log('promise1 end');
}).then(function(){
    console.log('promise2');
});
setTimeout(() => console.log('setTimeout'),0); 
console.log('script end');

// script start > promise1 > promise1 end >script end > promise2 > setTimeOut  

// ex3
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}

async function async2() {
    console.log('async2');
}
console.log('script start');
async1()
console.log('script end');

// script start > async1 start > async2 > script end > async1 end
// async 函数需要等待await 后的函数执行完成并且有了返回结果之后才会执行后续代码

// ex4
setTimeout(()=>{
    console.log(1) 
 },0)
 let a=new Promise((resolve)=>{
     console.log(2)
     resolve()
 }).then(()=>{
    console.log(3) 
 }).then(()=>{
    console.log(4) 
 })
 console.log(5)
 
 // 2 5 3 4 1

 // ex5
 new Promise((resolve,reject)=>{
    console.log("promise1")
    resolve()
}).then(()=>{
    console.log("then11")
    new Promise((resolve,reject)=>{
        console.log("promise2")
        resolve()
    }).then(()=>{
        console.log("then21")
    }).then(()=>{
        console.log("then23")
    })
}).then(()=>{
    console.log("then12")
})

// promise1 then11 promise2 then21 then12 then23
// 有疑问