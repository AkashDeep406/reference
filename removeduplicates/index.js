/***
 * 
 * At most have 2 dupliates
 */

function removeDuplicates(arr) {
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[index] === arr[i + 1]) {
            index++;
            while (arr[index] === arr[i + 1]) {
                arr.splice(i + 1, 1);
                index++;
            }

        }

    }
    return arr.length;
}


console.log(removeDuplicates([1, 1, 1, 1, 2, 2, 2, 3]))