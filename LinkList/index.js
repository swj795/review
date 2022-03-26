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

function reverseList (linkList) {
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

const list = new LinkList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
console.log(reverseList(list).toString());