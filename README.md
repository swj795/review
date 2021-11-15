# review
# ES6

## 函数的扩展

### 默认参数位置

如果在非尾部设置默认参数，那么传参时，此位置的参数不能省略

```js
function f(x=1,y){return [x,y]}
f(,2) // 报错
```



### 函数length属性

Function.length // 返回函数参数的长度

```js
// 若设置默认参数，那么Function.length将会失真 
function f(x,y,z=1){return [x,y,z]}
console.log(f.length)  // 2

// 如果设置默认参数不是尾参数，那么默认参数后面的参数也将不计入后面的参数
function f(x,y=2,z){return [x,y,z]}
function f1(x=1,y=2,z){return [x,y,z]}
console.log(f.length) // 1
console.log(f1.length) // 0
```

### 作用域

函数进行初始化时，参数会形成一个单独的作用域。不设置参数时，则不会出现

```js
let x = 2 
function f(x=x){
    console.log(x)
}
// 由于TDZ会导致报错
// 编译时，let x = x 出现TDZ

// 默认参数是函数也会有作用域
function bar(funtion = ()=> foo){
    let foo = 'inner';
    console.log(foo)
}
bar() // 报错

let foo = 'outer'
function bar(funtion = ()=> foo){
    let foo = 'inner';
    console.log(foo)
}
bar() // outer


// 复杂例子
var x = 1;
function foo(x,y = function(){ x = 2; console.log(x)}){
    var x = 3;
    y();
    console.log(x)
}

foo() 
console.log(x)

// 2 3 1
// 函数初始化时，参数x和y有自己的作用域 foo函数内部定义的x变量 与 参数x 不是同一个变量

var x = 1;
function foo(x,y = function(){ x = 2; console.log(x)}){
    x = 3;
    y();
    console.log(x)
}

foo() 
console.log(x)

// 2 2 1
// 此时 foo函数内部的x变量 与 参数x 为同一变量 y() 运行后会改变x
```



### 箭头函数不适用的场景

1、定义对象的方法，且该方法中包括this

2、需要动态的this的时候

```js
var button = document.querySelector('press')
button.addEventListener('click',()=>{
    this.classList.toggle('on');
})
```

3、函数内部有大量的读写操作，不单为了计算值 ，不应该使用箭头函数



### Function.prototype.toString()

函数实例调用toString()方法，返回函数实例本身

## 数组的扩展

### 复制数组

```js
// 直接复制 只是复制了指针  属于浅拷贝 修改复制后的数组，原数组也会改变
const a1 = [1,2]
const a2 = a1;
a2[0] = 2;
console.log(a1) // [2,2]

// 使用ES6的方法 就是深拷贝 修改复制后的数组 原数组不会改变
const a1 = [1,2]
const a2 = [...a1]  或 const [...a2] = a1
a2[0] = 2
console.log(a1) // [1,2]
```

### 合并数组

```js
// 属于浅拷贝 
const a1 = [a,b]
const a2 = [c,d]
// ES5 
const a3 = a1.concat(a2)
// ES6
const a3 = [...a1,...a2]
```



### Array.from()

```js
// 将类数组对象和可遍历对象转换成真正的数组
let arrayLike = {
    '0':'a',
    '1':'b',
    '2':'c',
    length:3
};
// ES5  
// slice 属于浅拷贝 原始数组不会改变
var arr = [].slice.call(arrayLike); // ['a']

// ES6
let arr2 = Array.from(arrayLike)

// 对于没有Array.from的浏览器
const toArray = (()=>Array.from ? Array.from : obj => [].splice().call(obj))()

// 接收第二个参数 作用类似数组的map方法
// Array.prototype.map() 返回一个新数组，数组元素是调用提供函数后的返回值

Array.from(arrayLike,n => n||0)

// expr1 || expr2  如果expr1为true  返回expr1 反之返回expr2 用与Boolean中 有一个为true返回true
// expr1 && expr2  如果expr1为false 返回expr1 反之返回expr2 用与Boolean中 有一个不为true返回false
```

