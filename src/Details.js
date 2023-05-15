import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/Details.scss';
import { useNavigate } from 'react-router-dom';
import { baseUrl, itemParams } from './config/config';
import Loader from './Loader';

const Details = () => {
    const location = useLocation();
    const [detail, setDetail] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${baseUrl}${itemParams || location.state.id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data);
                setDetail(data);
                setIsLoading(false);
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
        <div className='detail__btn' onClick={() => {navigate('/')}}>Back to the main page</div>
        <Loader isLoading={isLoading} />
    </div>
};

export default Details;