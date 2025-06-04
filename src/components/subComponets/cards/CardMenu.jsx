import cardMenuImg from './../../../source/hamburger-round.png';

import Button from '../button/Button';

import './cardMenu.css';

const CardMenu = ({ name, desc, price, recStatus }) => {
    return (
        <div className='card-menu'>
            <p className={recStatus}>{recStatus}</p>
            <div className='card-menu__img-wrapper'>
                <img
                    className='card-menu__img'
                    src={cardMenuImg}
                    alt='Burger'
                />
                <div className='card-menu__price'>
                    <p>{price}</p>
                </div>
            </div>
            <div className='card-menu__name'>{name}</div>
            <div className='card-menu__desc'>{desc}</div>
            <div className='card-menu__btn'>
                <Button className='button-wrapper--second' title='Order' />
            </div>
        </div>
    );
};

export default CardMenu;
