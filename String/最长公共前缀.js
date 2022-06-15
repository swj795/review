function longestCommonPrefix(strs) {
    // 将字符串数组的第一项作为最长前缀 依次比较
    let res = strs[0] || '';
    for(let i = 1; i < strs.length;i++){
        while(strs[i].slice(0,res.length) !== res){
            res = res.slice(0,res.length - 1);
        }
    }
    return res;
}

console.log(longestCommonPrefix(['flow','flower','fly','fl']));