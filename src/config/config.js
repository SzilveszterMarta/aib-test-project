const useFakeDatabase = true;

export const baseUrl = useFakeDatabase ? 'http://localhost:3030/' : 'https://api.coingecko.com/api/v3/coins/';
export const listParams = useFakeDatabase ? 'mock-list' : 'markets?vs_currency=EUR&order=market_cap_desc&per_page=10';
export const itemParams = useFakeDatabase ? 'mock-item' : null;