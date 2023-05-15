import './styles/Loader.scss';

const Loader = (props) => {
    if (props.isLoading === true) {
        return <div className='loader'>
            <div className='loader__icon'></div>
        </div>;
    }
    return null;
};

export default Loader;