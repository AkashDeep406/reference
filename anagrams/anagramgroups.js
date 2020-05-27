
/***
 * ip: ['eat','ate', 'tan','nat','bat', 'tea']
 * op: [['eat','ate','tea'],['tan','nat'], ['bat']]
 * 
 * 
 */
function anagramproups(arr) {

    let res = {}
    for (let word of arr) {
        let key = sortedString(word);
        if (!res[key]) {
            res[key] = []
        }
        res[key].push(word)
    }

    return Object.values(res);
}



function sortedString(str) {
    return str.split('').sort().join('');
}

console.log(anagramproups(['eat', 'ate', 'tan', 'nat', 'bat', 'tea']))