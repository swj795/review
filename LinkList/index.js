class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.count = 0
    }
    push(element) {
        const node = new Node(element);
        let current;
        if(this.head == null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.count += 1;
    }
    // 返回表示整个链表的字符串
    toString() {
        if(this.head == null) {
            return ''
        }
        let linkList = `${this.head.value}`;
        let current = this.head.next;
        while(current) {
            linkList = `${linkList} ${current.value}`
            current = current.next;
        }
        return linkList;
    }
}

// 迭代方法实现反转链表 
function reverseList1 (linkList) {
    let pre = null;
    let cur = linkList.head;
    while(cur){
        const next = cur.next
        cur.next = pre;
        pre = cur
        linkList.head = cur;
        cur = next
    }
    return linkList
}

// 递归方法实现反转链表
function reverseList2 (head) {
    if(head == null || head.next == null){
        return head;
    }
    const newHead = reverseList2(head.next)
    head.next.next = head;
    head.next = null
    return newHead;
}

const list = new LinkList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
// console.log(reverseList(list).toString());
console.log(reverseList2(list.head));
// // 翻转链表指定的位置left - right
// function reverseBetween(linkList,left,right){
//     let vNode = new Node(-1);
//     vNode.next = linkList.head;
//     let pre = vNode;
//     for(let i = 0;i < left -1;i++){
//         pre = pre.next;
//     }
//     const cur = pre.next;
//     for(let i = 0;i < right - left; i++){
//         const next = cur.next;
//         cur.next = next.next;
//         next.next = pre.next;
//         pre.next = next;
//     } 
//     return linkList
// }

// console.log(reverseBetween(list,2,5).toString());

// 寻找链表中间节点
function middleNode(linkList) {
    let slow =  linkList.head
    let fast = linkList.head;
    // 注意判断条件 fast 和fast.next 
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow
}

console.log(middleNode(list));


// 判断链表是否有环
function hasCycle (head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }
    return false;
}