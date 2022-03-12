// 用reduce实现map

// Array.prototype.map(callback(item,index,arr),thisArg)
// 遍历数组，返回一个新数组
// 第一个参数是一个回调函数，参数为当前值，当前值的索引，当前值所属的数组
// 第二个可选参数，对象作为该执行回调时使用，传递给函数，用作this的指向

// Array.prototype.reduce(callback(pre,cur,curIndex,arr),initValue)
// 一个累加方法，对数组累积执行回调函数，返回最终计算的结果
// 第一个参数是一个回调函数，参数为 上一次累积的值，当前值，当前值所对应的索引，当前值所在数组
// 第二个参数是初始值，第一次遍历时的pre值


Array.prototype.myMap = function(fn,thisArg = []) {
    if(typeof fn !== 'function'){
        throw new Error(`${fn} is not a function`);
    }

    return this.reduce((pre,cur,curindex,arr) => {
        return pre.concat(fn.call(thisArg,cur,curindex,arr))
    },[])
};

// 确定传入的参数和返回的值
const arr = [1,2,3,4];
console.log(arr.myMap(item => item *2));