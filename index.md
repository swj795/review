### 自己复习

#### cookie localStorage sessionStorage

**存储大小** cookie只能存4kb localStorage sessionStorage 能够存到5mb+

**存储时间** cookie可以设置存储时间 localStorage永久存储 sessionStorage 关闭浏览器即清除

**存储位置** cookie会自动上传到服务器 localStorage和sessionStorage存储在本地

---

<!doctype html> 
声明 进入严格模式

---

### css

#### 继承与不继承

无继承属性：

display、

文本属性（vertical-align  垂直对齐 text-shadow white-space ）

盒子模型、背景属性、定位属性、content、轮廓样式、页面样式、声音样式

可继承：

字体：font-family font-size font-style font-weight

文本： text-align 文本水平对齐 line-height  color text-indent 文本缩进 

元素可见 visibility

列表布局属性 list-style 

光标 cursor

#### 块级元素 行内元素 行内块元素

块级元素：1、自动换行  2、可以设置宽高 3、margin padding都有效

行内元素：1、宽高无效 2、水平方向可以margin padding有效 3、不会自动换行

#### 隐藏元素

```css
display: none /* 渲染不出 不会占据位置 不会响应绑定时间  发生重排*/ 
visibility:hidden /* 占据位置 不会响应 发生重绘*/
opacity：0 /* 占据位置 响应事件*/
position：absolute /* 通过定位到可视区外*/
z-index：负值 /*用别的元素遮挡 */
clip-path /*剪裁元素 占据位置 不响应*/
transform：scale(0,0) /*缩放 占据位置 不响应*/
```

#### 性能优化

##### 加载性能

1、css压缩，将css打包压缩

2、css单一样式

3、选择器性能 ：关键选择器 避免通配规则  尽量少使用标签选择器 

##### 渲染性能

慎用浮动 定位

减少重排 重绘

属性值为0时不加单位

标准化浏览器前缀

选择器优化嵌套

##### 可维护性

具有相同属性的样式抽离 

将css代码定义在外部

---

#### 水平垂直实现

```css
.parent {
  position: relative;
}
.child {
  position: absolute;
    left: 50%;
    top:50%;
  transform:translate(-50%,-50%)
}

.parent {
  display:flex;
  justify-content:center;
  align-item:center;
}
```

---

#### 清除浮动

```css
.clear::after{
  content:'';
  display:block;
  clear:both
}
.clear {
  *zoom: 1;
}
```

---

#### 自适应高度/宽度

可以用%或者vh/vw

如果视区是100vh，1vh是1/100，也就是1% 视区是指浏览器内部的可视区的大小（window.innerWidth）

两栏布局

```css
.left {
  weight: 50vw;
  float:left;
}
.right {
  weight: 50vw;
  float:right;
}
```

```css
.content {
  display:flex;
}
.left {
  weight: 25%
}
.right {
  flex: 1
}
```

```css
flex:flex-grow,flex-shrink,flex-basis
flex-basis 定义了元素的空间大小
设置了weight:100px,flex-basis:100px
flex-grow 如果为正数，flex元素会以flex-basis为基础，沿主轴的方向放大n倍
flex-shrink flex元素会缩小到flex-basis以下
```



---



### js

#### 创建AJAX

```js
// 创建XMLHttpRequest对象
let xhr = new XMLHttpRequest();
// 创建一个http请求 请求方法 请求地址 是否异步
xhr.open('GET',url,true);
// 设置监听函数 
// xhr对象有5个状态 状态改变时会调用onreadystatechange函数
xhr.onreadystatechange = function() {
  // 状态如果为4 代表服务器返回的数据接收完成
  if(this.readystate !== 4) return
  // 状态吗如果为200 说明数据返回成功
  if(this.status === 200){
    handle(this.response)
  }else{
    console.error(this.statusText)
  }
};
// 请求失败的监听函数
xhr.onerror = function (){
  console.error(this.statusText)
}
// 设置请求头
xhr.setRequestHeader('Accept','application/json')
// 发送请求
xhr.send(null)
```

#### 用promise封装AJAX

```js
function getJson (url) {
  let promise = new Promise(function(res,rej){
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
      if(readystate !== 4)return
      if(status === 200){
        res(this.response)
      }else{
        reject(new Error(this.statusText))
      }
    }
    xhr.onerror = function (){
      reject(new Error(this.statusText))
    }
    xhr.setRequestHeader('Accept','application/json')
    xhr.send(null);
  });
  return promise
}
```

#### ES6

##### 函数的扩展

###### 默认参数位置

如果在非尾部设置默认参数，那么传参时，此位置的参数不能省略

```js
function f(x=1,y){return [x,y]}
f(,2) // 报错
```



###### 函数length属性

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

###### 作用域

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



###### 箭头函数不适用的场景

1、定义对象的方法，且该方法中包括this

2、需要动态的this的时候

```js
var button = document.querySelector('press')
button.addEventListener('click',()=>{
    this.classList.toggle('on');
})
```

3、函数内部有大量的读写操作，不单为了计算值 ，不应该使用箭头函数



##### 数组的扩展

###### 复制数组

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

###### 合并数组

```js
// 属于浅拷贝 
const a1 = [a,b]
const a2 = [c,d]
// ES5 
const a3 = a1.concat(a2)
// ES6
const a3 = [...a1,...a2]
```

###### 类数组转换成数组

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
var arr = [].slice.call(arrayLike); // ['a','b','c']

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

###### 数组常用api

Array.prototype.slice(start,end)

返回一个新的数组，包括start 不包括end，属于浅拷贝

Array.prototype.splice(start,deletcount,[...item])

通过删除或插入元素，start（开始的位置） deletcount(删除的个数) [...item]插入的元素

返回修改之后的数组（在原数组上）

Array.prototype.keys()

返回一个数组元素为：每个元素对应的索引

Array.prototype.values()

返回一个数组元素为：原先数组的每一项

Array.prototype.includes()

用来判断一个数组是否包含某一个值返回boolean







#### 闭包

https://github.com/swj795/review/blob/0301/closure.js

#### 回调函数

**作为参数传递给另一个函数的函数是回调函数**

回调函数：在其他的事件发生后运行，不是按照顺序执行，同时被称为异步

使用场景：

定时器，事件声明等

---

### vue

##### 数据双向绑定

1、给数据加上setter和getter，当数据改变时，触发setter，监听到数据变化

2、解析模版，数据变动 ，更新视图

3、watcher订阅者是observe和compile之间的桥梁

4、mvvm整合三者

#### 生命周期

开始创建 初始化数据 模版编译 挂载 渲染 更新 渲染  卸载

钩子函数

created  mounted activated deactivated destroyed 

created：发起接口请求

mounted：对dom相关操作 

destroyed： 做清除工作

### React

#### hooks

##### useState

需要向组件中添加一些状态，

useState参数说明：初始state

useState返回值：返回当前state和更新state函数

```js
const [count,setCount] = useState(0)
// 利用了数组解构
// useState返回一个数组，第一个元素是当前的state，第二个元素是一个更新state的函数
```



##### useEffect

React 会在每一次渲染后调用副作用函数——包括第一次渲染

清除副作用：在useEffect中通过返回一个函数来清除副作用

```js
useEffect(() => {
  const subscribe = prop.source.subscribe();
  return () => {
    subscription.unsubscribe()
  }
})
```

提高性能：通过传递第二个参数，根据第二个参数是否有变化来决定是否执行effect

如果传递一个空数组，说明effect不依赖任何props和state，永远都不需要重复执行



---

### 数据结构

数组结构查找效率最高：

![image-20220311110037014](/Users/swj/Library/Application Support/typora-user-images/image-20220311110037014.png)



### ACM模式

```js
var k. = readline()
while(line = readline()) {
  var lines = line.split(' ');
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  print(a + b)
}
```

