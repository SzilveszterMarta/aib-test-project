import { useState, useEffect } from 'react';
import Item from './Item';
import './styles/List.scss';
import { listParams, baseUrl } from './config/config';
import Loader from './Loader';

const List = () => {
    const [coins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${baseUrl}${listParams}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCoins(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return <div className='list'>
        {coins.map((coin) => {
            return <Item coin={coin} key={coin.id} />
        })}
        <Loader isLoading={isLoading} />
    </div>
};

export default List;