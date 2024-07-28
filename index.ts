//console.log('Hello TypeScript')

const api = 'api.frankfurter.app';
const endpoint = 'latest';
const baseUrl = `https://${api}/${endpoint}`;

// @ts-ignore
const convertCurrency = (amount, from, to) => {
    return fetch(`${baseUrl}?amount=${amount}&from=${from}&to=${to}`)
        .then(res => res.json())
}

convertCurrency(100, 'USD', 'EUR').then(console.log)