import cardOffersImg from './../../../source/hamburger.png';

import './cardOffers.css';

const CardOffers = ({ name, price }) => {
    return (
        <div className='card-offers'>
            <div className='card-offers__img'>
                <img src={cardOffersImg} alt='Hamburgers' />
                <div className='card-offers__name'>"{name}"</div>
                <div className='card-offers__brakeline'></div>
                <div className='card-offers__price'>"${price}"</div>
            </div>
            <div className='card-offers__content'>
            </div>
        </div>
    );
};

export default CardOffers;
