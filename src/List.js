import { useState, useEffect } from 'react';
import Item from './Item';
import './List.css';

const List = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=10')
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