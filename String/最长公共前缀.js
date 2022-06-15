function longestCommonPrefix(strs) {
    // 将字符串数组的第一项作为最长前缀 依次比较
    let res = strs[0] || '';
    // 第一项作为前缀匹配 从第二项开始匹配循环
    for(let i = 1; i < strs.length;i++){
        while(strs[i].slice(0,res.length) !== res){
            // 字符串中只要有一位不匹配 长度就减1
            res = res.slice(0,res.length - 1);
        }
    }
    return res;
}

console.log(longestCommonPrefix(['flow','flower','fly','fl']));