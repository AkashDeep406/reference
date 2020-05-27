// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const max = Math.pow(2, 31);
    let r = 0;
    while (n !== 0) {
        r = r * 10 + n % 10;
        if (r > max || r < -max) return 0;
        n = (n / 10) << 0;
    }

    return r;
}

// function reverseInt(n) {
//     let sign = Math.sign(n);

//     let rev = n.toString().split('').reverse().join('');

//     return parseInt(rev) * sign;

// }

console.log(':::Reverse:::', reverseInt(-32));

module.exports = reverseInt;
