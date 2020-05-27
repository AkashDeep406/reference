// function subtractproductandsum(n) {


//     let sum = 0;
//     let product = 1;
//     while (n > 0) {
//         let currentDig = n % 10;
//         sum = sum + currentDig;
//         product = product * currentDig;
//         n = Math.floor(n / 10);
//     }
//     return (product - sum);

// }


function subtractproductandsum(n) {
    let res = n.toString().split('').map(Number);

    sum = res.reduce((a, b) => a + b);
    product = res.reduce((a, b) => a * b, 1);

    return product - sum;

}

console.log('res', subtractproductandsum(123));