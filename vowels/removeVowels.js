
/***Remove vowels */
function removeVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    res = str.split('').filter(char => {
        return !vowels.includes(char);
    })

    return res.join('')
}
//console.log('vowels:::', removeVowels('hello'))
/*****/

/***DEfang IP 
 * ip: 1.1.1.1
 * op: 1[.]1[.]1[.]
 * 
 */

function defangIp(ip) {
    let regex = /\./g
    let defang = ip.replace(regex, '[.]')

    return defang

}

console.log('defang:::', defangIp('1.1.1.1'))

