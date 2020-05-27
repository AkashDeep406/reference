// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//sorting
// function anagrams(stringA, stringB) {

//     return sortedString(stringA) === sortedString(stringB);


// }

// function sortedString(str) {
//     let res = str.replace(/[^\w]/g, '');
//     return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }


// console.log(sortedString('Hi there!@#'));

//creating charMaps and comparing
function anagrams(stringA, stringB) {

    if (stringA.length !== stringB.length) {
        return false;
    }

    const charA = charMap(stringA);
    const charB = charMap(stringA);


    for (let char in charA) {
        console.log(charA[char]);
        if (charA[char] !== charB[char]) {
            return false
        }

    }

    return true;
}



function charMap(str) {

    let charMap = {}

    let s = str.replace(/[^\w]/g, '').toLowerCase();

    for (let cha of s) {
        charMap[cha] = charMap[cha] + 1 || 1;

    }
    return charMap;
}







module.exports = anagrams;
