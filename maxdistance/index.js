/****
 * input: [[1,2,3],[4,5],[1,2,3]]
 * opuput = 4 (5-1)
 * 
 * max = 3,
 * min= 1
 * Math.max(res, Math.abs(arr[i][n] - min), Math.abs(max - arr([i][0])));
 * (0,4,1), res = 4
 * min = 4, max = 5
 * (4,3,3) 
 * res = 4
 */


function maxdistance(arr) {
    let res = 0
    let min = arr[0][0];
    let max = arr[0][arr[0].length - 1];

    for (let i = 1; i < arr.length; i++) {
        res = Math.max(res, Math.abs(arr[i][arr[1].length - 1]) - min, Math.abs(max - arr[i][0]));
        min = Math.min(min, arr[i][0]);
        max = Math.max(max, arr[i][arr[i].length - 1]);

    }

    return res

}

console.log(maxdistance([[1, 2, 3], [4, 5], [1, 2, 3,]]))