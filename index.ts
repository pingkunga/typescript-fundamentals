//console.log('Hello TypeScript')

const api = 'api.frankfurter.app';
const endpoint = 'latest';
const baseUrl = `https://${api}/${endpoint}`;

// @ts-ignore
const convertCurrency = (amount, from, to) => {
    fetch(`${baseUrl}?amount=${amount}&from=${from}&to=${to}`)
        .then(res => res.json())
}
