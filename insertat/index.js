/*****
 * Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
 * You may assume no duplicates in the array.
 * Input: [1,3,5,6], 5
 *   Output: 2
 *  
 */



function insertAt(arr, target) {
    if (arr.indexOf(target) !== -1) {
        return arr.indexOf(target);

    } else {
        arr.push(target);
        let sorted = arr.sort((a, b) => a - b, [])
        return sorted.indexOf(target);
    }

}


/***Binary Search solution  */

function insertAt(arr, target) {
    let min = 0;
    let max = arr.length - 1;


    while (min <= max) {
        let mid = Math.floor((max + min) / 2);
        if (arr[mid] === target) {
            return mid

        }

        if (arr[mid] > target) {
            max = mid - 1;

        } else {
            min = mid + 1
        }

    }


    return min;
}


console.log(insertAt([1, 3, 5, 6], 7));
