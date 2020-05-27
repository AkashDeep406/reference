// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let res = [];

    for (let i = 0; i < n; i++) {
        res.push([]);

    }

    let sr = 0;
    let er = n - 1;
    let sc = 0;
    let ec = n - 1;
    let count = 1;

    while (sr <= er && sc <= ec) {
        //top row
        for (let i = sc; i <= ec; i++) {
            res[sr][i] = count;
            count++
        }

        sr++;

        //fill right edges
        for (let i = sr; i <= er; i++) {
            res[sr][ec] = count;
            count++;
        }


        ec--;

        //fill bottom;
        for (let i = ec; ec >= sc; ec--) {
            res[er][i] = count;
            count++

        }

        er--;
        //fill left edge;
        for (let i = er; i >= sr; er--) {
            res[i][sc] = count;
            count++
        }
        sc++

    }

    return res;

}

console.log(matrix(2))

module.exports = matrix;
