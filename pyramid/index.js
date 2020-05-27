// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//using recursion          
function pyramid(n, row = 0, level = '') {
    if (n === row) {
        return;

    }
    let column = level.length;
    let midPoint = Math.floor((n * 2 - 1) / 2);
    if (column === (n * 2 - 1)) {
        console.log(level);
        return pyramid(n, row + 1)

    }

    if (midPoint - row <= column && midPoint + row >= column) {
        level += '#'

    } else {
        level += ' '
    }

    pyramid(n, row, level);

}

//Matrix solution
// function pyramid(n) {
//     let midPoint = Math.floor((n * 2 - 1) / 2);

//     for (let row = 0; row < n; row++) {
//         let level = '';
//         for (let column = 0; column < n * 2 - 1; column++) {
//             if (midPoint - row <= column && midPoint + row >= level.length) {
//                 level += '#'

//             } else {
//                 level += ' '
//             }
//         }
//         console.log(level)

//     }

// }

console.log(pyramid(3))

module.exports = pyramid;
