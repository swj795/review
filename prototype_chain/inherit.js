// 实现继承
// 用原型链

function parent(name = 'lisi',parentArr = []) {
    this.name = name;
    this.parentArr = parentArr;
}

parent.prototype.getArr = function (){
    return this.parentArr;
}

function child1 (childArr) {
    this.childArr = childArr;
}

child1.prototype = new parent()

const child = new child1([1,2,3])