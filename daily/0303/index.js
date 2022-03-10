// 双指针问题

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


// 007 数组中和0的三个数字
function threeSum (nums) {
    nums.sort((a,b) => a-b);
    // 数组从小到大排序
    let result = [];
    for(let i = 0; i <= nums.length - 3; i++){
        if( i > 0 && nums[i] === nums[i-1] ) continue; // 去除相同的情况
        let l = i + 1, r = nums.length - 1; // 定义左右两指针
        let target = -nums[i];
        let sum = nums[l] + nums[r];
        while(l < r){
            if(sum < target) l++;
            else if(sum > target) r--;
            else{
                result.push([nums[i],nums[l],nums[r]]);
                l += 1;
                r -= 1;
            }
        }

    }
    return result
}

console.log(threeSum([-1,0,1,2,-1,-4]));


