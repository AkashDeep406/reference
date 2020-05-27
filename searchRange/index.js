/*****
 * Find the first and Last Position in Sorted Array
 * eg: nums = [1,2,3,4,5,5,6] , target = 5
* res = [3,4]
 */


[1, 2, 3, 4, 5, 5, 6]
function searchRange(nums, target) {

    let res = [-1, -1]

    let leftIndex = getIndex(nums, target, false);
    if (nums[leftIndex] !== target) {
        return [-1, -1]

    }
    let rightIndex = getIndex(nums, target, true) - 1;

    res[0] = leftIndex;
    res[1] = rightIndex;


    return res;
}


function getIndex(nums, target, searchRight) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2); // 3,5
        if (nums[mid] < target || (searchRight && nums[mid] === target)) {
            left = mid + 1; //4,

        } else {
            right = mid;
        }
    }

    return left

};


console.log(searchRange([1, 2, 3, 4, 5, 5, 6], 5));
// console.log(searchRange(
//     [1, 2, 3, 4, 5, 5, 6], 5))