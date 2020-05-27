function maxSubString(str) {
    let maxCount = 0;

    let i = 0; let j = 0;
    let set = new Set();
    while (i < str.length && j < str.length) {
        if (!set.has(str[j])) {
            set.add(str[j])
            j += 1;
            maxCount = Math.max(maxCount, j - i);

        } else {
            set.delete(str[i]);
            i += 1;
        }


    }
    return maxCount;
}




console.log('maxSubString', maxSubString('bbbbbbbb'));