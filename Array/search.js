// 顺序搜素
function sequentialSearch(array,value) {
    for(let i = 0;i < array.length;i++) {
        if(array[i] === value){
            return i
        }
    }
    return false;
}

// 二分法
// 要求被搜索的数据结构已排序
// 比中间值小的在左边找 右指针移动到中间的前一个位置
// 比中间值大的在右边找 左指针移动到中间的后一个位置
function binarySearch (arr,item) {
    arr = quickSort(arr);
    console.log(arr);
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while(left < right) {
        mid = Math.floor((left + right) / 2);
        if(arr[mid] < item) {
            left = mid + 1;
        }else if (arr[mid] > item) {
            right = mid - 1;
        }else {
            return mid
        }
    }
    return false;
}

// 快排
function quickSort (arr) {
    let len = arr.length;
    if(len <= 1) {return arr}
    // 找到一个基准
    let privotIndex = Math.floor(len / 2);
    let privot = arr.splice(privotIndex,1)[0];
    // 左右两个数组 存放比基准大或者小的数
    const right = [];
    const left = [];
    for(item of arr) {
        item > privot ? right.push(item) : left.push(item);
        
    };
    return quickSort(left).concat([privot],quickSort(right));
}

console.log(binarySearch([1,4,2,3,6,5,8],4));

// 内插搜索
// 适合已排序的数组
// delta 用来表示查找的数分布的位置
// position 用来定义中间值 left + Math.floor((right - left) * delta)

function interpolationSearch(arr,val) {
    const len = arr.length;
    let left = 0;;
    let right = len - 1;
    let position = -1;
    let delta = -1;
    while(left < right) {
        delta = (val - arr[left]) / (arr[right] - arr[left]);
        position = left + Math.floor((right - left) * delta);
        if(arr[position] === val){
            return position;
        }
        if(arr[position] > val) {
            right = position - 1;
        }else{
            left = position + 1;
        }
    }
    return false;
}

console.log(interpolationSearch([1,2,3,4,5,6,7,8],3));