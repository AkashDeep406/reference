/***
 * Given an array nums of integers, return how many of them contain an even number of digits.
 * Input: nums = [12,345,2,6,7896]
*  Output: 2
 * 
 * 
 */

function findNums(arr) {
    let result = 0
    for (num of arr) {
        result += num.toString().length % 2 === 0 ? 1 : 0;

    }

    return result;

}

console.log(findNums([12, 345, 2, 6, 7896]));