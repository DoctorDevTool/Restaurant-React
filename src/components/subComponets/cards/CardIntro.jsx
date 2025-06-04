import cardIntroImg from './../../../source/dish.png';

import './cardIntro.css';

const CardIntro = ({ hero, span, desc }) => {
    return (
        <div className='card-intro'>
            <div className='card-intro__wrapper'>
                <div className='card-intro__img'>
                    <img src={cardIntroImg} alt='Dish' />
                </div>
                <div className='card-intro__hero'>
                    {hero} <span>{span}</span>
                </div>
                <div className='card-intro__desc'>{desc}</div>
            </div>
        </div>
    );
};

export default CardIntro;
