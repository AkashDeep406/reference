// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;

//     for (let char of str.toLoweCase()) {
//         if (vowels.includes(char)) {
//             count++
//         }

//     }


//     return count
// }


function vowels(str) {
    let vowels = str.match(/[aeiou]/gi)
    return vowels ? vowels.length : 0
}



function removeVowels(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'z'];
    return str
        .split('')
        .reduce((curr, acc) => curr += (
            vowels.includes(acc) ? '' : acc
        ), '');


}


console.log(removeVowels('Why do you ask?'));

module.exports = vowels;
