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

### 奇安信笔试

```js
(function(){var x = y = 1})()
console.log(y)
console.log(x)
// 1 报错
// y没有用声明变量 => 全局变量
// x声明变量了 在function作用域中 全局是没有
```



### 奇安信面试

#### css：

##### 自适应高度/宽度

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

项目中遇到难点

vue后台管理平台中使用的技术栈

echarts表格，数据未渲染出来

js的语法难点？

未来学习的规划？

冒泡排序