


function threeSum(arr) {

    arr.sort((a, b) => a - b);
    const result = [];

    for (let aIndex = 0; aIndex < arr.length - 2; aIndex++) {
        let a = arr[aIndex];

        if (a > 0) return result;
        if (a === arr[aIndex - 1]) continue;

        let bIndex = aIndex + 1;
        let cIndex = arr.length - 1;

        while (bIndex < cIndex) {
            let b = arr[bIndex];
            let c = arr[cIndex];


            if ((a + b + c) === 0) {
                result.push([a, b, c]);
            }

            if ((a + b + c) >= 0) {
                while (arr[cIndex - 1] === c) {
                    cIndex--;
                }
                cIndex--;
            }

            if ((a + b + c) <= 0) {
                while (arr[bIndex + 1] === b) {
                    bIndex++;
                }

                bIndex++
            }

        }

    }

    return result;

}


console.log(threeSum([-1, 0, 1, 2, -1, -4])) //sorted [-4,-1,-1,0,1,2]