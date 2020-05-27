// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//recursion
//4
//#    
//##  
//
function steps(n, row = 0, step = '') {
    if (n === row) {
        return;
    }

    if (step.length === n) {
        console.log(step)
        steps(n, row + 1, '');
        return;
    }

    if (step.length <= row) {
        step += '#'
    } else {
        step += ' '
    }


    steps(n, row, step);

}

console.log(steps(3));

//imagine this to be a nxn matrix
// function steps(n) {

//     for (let row = 0; row < n; row++) {
//         let res = '';
//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 res += '#';
//             } else {
//                 res += ' ';
//             }
//         }
//         console.log(res);
//     }


// }

module.exports = steps;
