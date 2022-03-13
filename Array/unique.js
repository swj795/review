// 数组去重 双层循环
function unique1 (arr) {
    for(let i = 0; i < arr.length;i++){
        for(let j = i + 1;j < arr.length;j++) {
            if(arr[i] === arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}

// set去重
function unique2 (arr) {
   return  [...new Set(arr)]
   // return Array.from(new Set(arr))
}
console.log(unique2([1,2,21,2,1,4,5]));

// reduce 去重
function unique3 (arr) {
    return arr.reduce((pre,cur) => {
        if(!pre.includes(cur)){
            pre.push(cur)
        }
        return pre;
    },[])
}
console.log(unique3([1,2,21,2,1,4,5]));

// map去重
function unique4(arr) {
    const map = new Map();
    const newArr = new Array();
    for(item of arr){
        if(map.has(item)){
            map.set(item,true);
        }else {
            map.set(item,false);
            newArr.push(item);
        }
    }
    return newArr
}

console.log(unique4([1,2,21,2,1,4,5]));

// 用filter去重
function unique5(arr) {
    return arr.filter((item,index,arr) => {
        return arr.indexOf(item) === index;
    })
}
// indexOf() 返回第一次出现某一项的索引


