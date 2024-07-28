//console.log('Hello TypeScript')

const api = 'api.frankfurter.app';
const endpoint = 'latest';
const baseUrl = `https://${api}/${endpoint}`;

/*
{ 
    amount: 100, '
    base: 'USD', 
    date: '2024-07-26', 
    rates: { 
        EUR: 92.08 
    } 
}
*/

interface currencyResponse {
    amount: number;
    base: string;
    date: string;
    rates: {
        [key: string]: number
    }
}

type supportCurrency= "USD" | "JPY" | "EUR" | "THB"

const convertCurrency = ({
            from,
            to,
            amount
        }:{amount:number, from:supportCurrency, to:supportCurrency}): Promise<currencyResponse> => {
    return fetch(`${baseUrl}?amount=${amount}&from=${from}&to=${to}`)
        .then(res => res.json())
}

const main = async () => {
    const data = await convertCurrency({amount:100,from:'USD', to:'EUR'});
    console.log(data)

    //console.log(data.rates.USD) //undefined ต้องมาตรวจอีกทีให้ Sync กับ Input
}

main();