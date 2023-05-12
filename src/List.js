import { useState, useEffect } from 'react';
import Item from './Item';
import './styles/List.scss';
import { listParams, baseUrl } from './config/config';

const List = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=10')
        // fetch('http://localhost:3030/mock-list')
        fetch(`${baseUrl}${listParams}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCoins(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return <div className='list'>
        {coins.map((coin) => {
            return <Item coin={coin} key={coin.id} />
        })}
    </div>
};

export default List;