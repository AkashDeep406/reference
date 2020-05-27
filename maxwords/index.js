function maxWords(str) {
    let res = {};
    let count = 0;
    let maxWord = ''


    for (let word of str.split(' ')) {
        res[word] = res[word] + 1 || 1

    }


    for (let word in res) {
        if (res[word] > count) {
            count = res[word];
            maxWord = word;
        }
    }

    return maxWord;

}


// function maxWords(str) {
//     let strArr = str.split(' ');
//     const res = strArr.filter((word, index) => strArr.indexOf(word) !== index)

//     return res[0];

// }

// function maxWords(str) {
//     let strArr = str.split(' ');

//     return strArr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])

// }


console.log(maxWords('hello how are you how how how'));