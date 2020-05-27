let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

const fetch = require('node-fetch');

const requests = urls.map(url => fetch(url));

Promise.all(requests).then(responses => console.log(responses));