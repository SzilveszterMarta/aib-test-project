import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Details.css';
import { useNavigate } from 'react-router-dom';

const Details = () => {
    const location = useLocation();
    const [detail, setDetail] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${location.state.id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data);
                setDetail(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    if(!detail) return null;

    return <div className='detail'>
        <h2 className='detail__title'>{detail.name} - {detail.symbol}</h2>
        <p><span>Hashing algorithm:</span> {detail.hashing_algorithm || 'N/A'}</p>
        <p dangerouslySetInnerHTML={ {__html: detail.description.en} }></p>
        <p><span>Market cap in EUR:</span> {detail.market_data.market_cap.eur}</p>
        <p><span>Homepage:</span> <a href={detail.links.homepage[0]}>{detail.links.homepage[0]}</a></p>
        <p><span>Genesis date:</span> {detail.genesis_date || 'N/A'}</p>
        <button onClick={() => {navigate('/')}}>Back to the main page</button>
    </div>
};

export default Details;