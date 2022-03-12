/**
 * 冒泡排序
 * 相邻的俩个元素比较大小
 * 从第一个开始，到倒数第二个
*/

function bubbleSort(nums) {
    // 第一层循环是用来控制经过多少轮（数组的长度）
    for(let i = 0; i < nums.length - 1;i++){
        // 从第一个到最后依次比较
        for(let j = 0;j < nums.length - 1 - i;j++){
            if(nums[j + 1] < nums[j]){
                [nums[j+1],nums[j]] = [nums[j],nums[j+1]]
            }
        }
    }
    return nums
}

console.log(bubbleSort([11,12,18,19,15]));



// 插入排序
function insertSort(nums) {
    // 从第二项开始到最后
    for(let i = 1;i < nums.length;i++){
        // 第几个数和他之前所有数比较
        for(let j = i; j > 0; j--){
            if(nums[j] < nums[j - 1]){
                [nums[j -1],nums[j]] = [nums[j],nums[j-1]]
            }
        }
    }
    return nums
}

console.log(insertSort([11,12,19,16,15]));

// 选择排序
// 依次选择最小的，从头开始排列
function selectSort (nums) {
    let minIndex
    for(let i = 0;i < nums.length -1;i++){
        minIndex = i;
        for(let j = i + 1;j < nums.length;j++){
            if(nums[j] < nums[minIndex]){
                minIndex = j
            }
        }
        [nums[minIndex],nums[i]] = [nums[i],nums[minIndex]];
    }
    return nums
}

console.log(selectSort([11,18,12,15,19]));



// 归并排序
// 用二分法把数组若干个子数组 用递归 分成子数组项只有一个
// 左右两个子数组先各自排序，然后连起来的时候再排序

function mergeSort (arr) {
    const len = arr.length;
    if(len > 1) {
        let middle = Math.floor(len / 2);
        // left right 两个数组
        const left  = arr.slice(0,middle);
        // console.log(left,1)

        const right = arr.slice(middle);
        // console.log(right,2);
        arr = merge(mergeSort(left),mergeSort(right));

    }
    return arr;
}

function merge(left,right){
    const result = [];
    let i =0,j=0
    while(i < left.length && j < right.length){
        result.push(left[i] < right[j] ? left[i++] : right[j++])
        // console.log(result,3);
    }
    return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

console.log(mergeSort([11,17,19,15,18,13]));



/**
 * 快排
 * 1、找一个基准
 * 2、小于基准的放在左边，大于基准的放在右边
 * 3、对于基准两边的子集，不断重复第一步，第二步，直到所有的子集只剩下一个元素
 */ 

function quickSort(arr) {
    if(arr.length <= 1) {return arr}
    let pivotIndex = Math.floor(arr.length / 2);
    let piovt = arr.splice(pivotIndex,1)[0];
    const left = [];
    const right = [];
    for(let i = 0;i < arr.length; i++){
        arr[i] > piovt ? right.push(arr[i]) : left.push(arr[i]);
    }
    return quickSort(left).concat([piovt],quickSort(right))
}
console.log(quickSort([11,16,14,13,18,15]));



/**
 *计数排序 
 * 1、找到数组中最大的一个值
 * 2、创建一个长度为上面找到最大的空数组
 * 3、遍历原数组，值对应的空数组的索引，有一个就+1
 * 4、将空数组有值的地方依次遍历出来
 */ 

 function countSort(arr) {
     if(arr.length < 2) {return arr}
     const max = Math.max(...arr);
     const counts = new Array(max+1).fill(0);
     arr.forEach(item => counts[item] += 1)
     let sortedIndex = 0;
    counts.forEach((item,index) => {
        while(item >= 1){
            arr[sortedIndex++] = index
            item--;
        }
    })
    return arr;
 }
console.log( countSort([1,2,6,5,4]));




/**
 * 希尔排序
 * 
 */

function shellSort(arr) {
    let len = arr.length,temp,gap = 1;
    while(gap < len /2) {
        gap = gap * 2 + 1;
    }
    // 步长依次缩减一半直到为1
    for(gap;gap > 0;gap = Math.floor(gap / 2)){
        // 第一个和第gap个比较
        for(let i = gap;i < len;i++){
            temp = arr[i];
            let j = i - gap
            for(j;j >= 0 && arr[j] > temp;j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
            console.log(`${gap},----,${arr},--,${i}`);
        }
    }
return arr
}

console.log(shellSort([1,3,2,5,4,6,8,7]));