const anagrams = (stringA, stringB) => {
    if (stringA.length !== stringB.length) {
        return false;

    }




    let charMapA = charMap(stringA);
    let charMapB = charMap(stringB);


    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) return false;

    }
    return true;





}


const charMap = (str) => {
    let char = {};

    let str = str.replace(/[^\w]/g, '').toLoweCase();

    for (let c of str) {
        char[c] = char[c] + 1 || 1

    }


    return char;



}