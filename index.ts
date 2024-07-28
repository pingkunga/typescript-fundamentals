//console.log('Hello TypeScript')

const api = 'api.frankfurter.app';
const endpoint = 'latest';
const baseUrl = `https://${api}/${endpoint}`;

fetch(`${baseUrl}?amount=100&from=THB&to=USD`)
    .then(res => res.json())
    .then(console.log)
