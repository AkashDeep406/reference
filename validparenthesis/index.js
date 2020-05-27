const isValid = (s) => {

    let obj = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    let stack = [];
    for (const paran of s) {
        console.log()
        if (obj.hasOwnProperty(paran)) {
            stack.push(paran)
        } else {
            const closeParan = stack.pop();
            if (paran !== obj[closeParan]) {
                return false;
            }
        }
    }
    return stack.length === 0;



}


console.log('isValid', isValid('{[()]}'));