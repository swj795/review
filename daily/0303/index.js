// 剑指offer 006 有序数组的俩数和
function twoSum (numbers,target) {
    let left = 0,right = numbers.length - 1;
    while(left < right ) {
        let count = numbers[left] + numbers[right]
        if(count  === target){
            return [left,right]
        }
        else if(count < target){
            left++
            
        }else{
            right--
        }
    }
    return []
}

console.log(twoSum([1,2,3,4,6,10],8));
