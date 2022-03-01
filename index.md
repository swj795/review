### 笔试复盘

IE6 和 IE7 兼容问题

IE6可以识别 "*"  "_" 

IE7只能识别 "*"

---

html() 只能适用于html   不适用于xml

---

<img src="/Users/swj/Library/Application Support/typora-user-images/image-20220227193739309.png" alt="image-20220227193739309" style="zoom:67%;" />

Client 为客户端

---

默认情况下，XHR对像只能访问与包含它的页面位于同一个域中的资源

---

同时具有较高的查找和删除性能的数据结构 hash表0(1)和avl树0(logn)

---

h5默认情况下链接带下划线 bootstrap 只有在hover情况下带下划线

---

算法题

![image-20220227200308361](/Users/swj/Library/Application Support/typora-user-images/image-20220227200308361.png)

---

隐式转换

toPrimitive() 方法将值转换成基本类型值

当type为number 先调用obj.valueOf() [如果为原始值返回]再调用toString()

当type为string 先调用toString()[如果为原始值返回]再调用valueOf()

对象只有为Date对象，type为string 其余为number

**+操作符 只要有string类型变量，两边都会转成字符串，其他情况转化成数字**

**"-" "*" "/" 操作符 都会转化成数字  NAN也是数字**

---

H5为什么加强语义化

1、页面结构更加清晰2、便于开发维护3、有利于seo4、方便设备解析

---

空元素：没有内容的html元素 即单标签

常见的：<br/><hr/><img /> <imput/><link/><meta/>

---

BFC特性

(Block Formatting Context BFC)块格式上下文  一个容器，在容器中元素按照规则来摆放

创建BFC的条件

1、根元素

2、元素设置浮动

3、设置为绝对定位

4、display为inline-block flex table-cell

5、overflow为hidden auto scroll

特点：

1、垂直方向自上相下

2、计算BFC高度 需计算浮动元素的高度

3、BFC上下相邻的两个容器margin会重叠

4、BFC不会与浮动的容器发生重叠

5、不会影响到外部元素

6、每个元素左margin和左border相接触

用途：

1、清除margin的重叠问题 ：将两个元素变为俩个bfc（外面包裹一层 div）

2、解决高度塌陷问题： 子元素设置浮动后，父元素高度会变为0 ，父元素设置overflow：hidden

3、创建自适应两栏布局：左边定宽，设为浮动 右边自适应，设置overflow：hidden 【BFC不会与浮动发生重叠】

---

typeof返回的值 number string boolean undefined object function bitInt

判断数组、对象、null都会被判为object

instanceof只能正确判断引用类型的题

constructor能够准确判断属于什么类型 返回boolean 但是创建一个对象改变原型就不能使用这个方法

Object.prototype.toString.call() 调用Object原型上的toString方法

---

array的原生方法 

slice 截取数组 返回新的数组 slice(start,last) 包含start不包含last

splice 插入或者删除元素 在原有的数组上做改变 splice(start,deleteCount,element) 开始位置 删除个数 插入的元素

concat 合并数组 不会影响数组

pop尾部删除 返回删除的值

push尾部添加 返回新数组的长度

shift 头部删除 返回删除元素的值

unshift 头部添加 返回新数组的长度

---

acm模式下

![image-20220228102837944](/Users/swj/Library/Application Support/typora-user-images/image-20220228102837944.png)

![image-20220228102727712](/Users/swj/Library/Application Support/typora-user-images/image-20220228102727712.png)

---

![image-20220228110439629](/Users/swj/Library/Application Support/typora-user-images/image-20220228110439629.png)

```js
function duplicate(numbers,duplication){
  let obj = {}
  for(let item of numbers){
    if(!obj[item])obj[item] = 1
    else {
      duplication[0] = item 
      return true
    }
  }
  return false
}
```

---

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

