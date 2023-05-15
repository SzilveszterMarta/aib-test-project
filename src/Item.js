import './styles/Item.scss';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const navigate = useNavigate();
    const coin = props.coin;
    return <div className='item' key={coin.id} onClick={() => {navigate(`/details/${coin.id}`, {state:{id:coin.id}})}}>
        <img src={coin.image} className='item__img' />
        <h2 className='item__title'>{coin.name} - {coin.symbol}</h2>
        <p className='item__desc'>Current price: {coin.current_price}</p>
        <p className='item__desc'>Highest price: <span className='item__desc--highest'>{coin.high_24h}</span></p>
        <p className='item__desc'>Lowest price: <span className='item__desc--lowest'>{coin.low_24h}</span></p>
    </div>
};

export default Item;