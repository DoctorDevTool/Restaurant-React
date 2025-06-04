import Button from '../subComponets/button/Button';
import logoImg from '../../source/logo.png';
import cartImg from '../../source/cart.png';
import phoneImg from '../../source/phone.png';
import './header.css';
import CardIntro from '../subComponets/cards/CardIntro';

const cardInfo = [
    {
        hero: 'Magic',
        span: 'Atmosphere',
        desc: 'In our place you can feel the magic atmosphere',
    },
    {
        hero: 'The best quality of',
        span: 'Food',
        desc: 'The quality of our food is outstanding',
        
    },
    {
        hero: 'Afordable',
        span: 'Food',
        desc: 'The cost of our food depends only of the quantity. The quality is always the best',

    }
];

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__row'>
                    <div className='header__logo'>
                        <img src={logoImg} alt='Logo' />
                    </div>
                    <nav className='header__nav'>
                        <ul className='header__nav-list'>
                            <li className='header__nav-item'>
                                <a href='#!' className='header__nav-link'>
                                    Main
                                </a>
                            </li>
                            <li className='header__nav-item'>
                                <a href='#!' className='header__nav-link'>
                                    Manu
                                </a>
                            </li>
                            <li className='header__nav-item'>
                                <a href='#!' className='header__nav-link'>
                                    About Us
                                </a>
                            </li>
                            <li className='header__nav-item'>
                                <a href='#!' className='header__nav-link'>
                                    Booking
                                </a>
                            </li>
                            <li className='header__nav-item'>
                                <a href='#!' className='header__nav-link'>
                                    <img src={cartImg} alt='cart' />
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className='header__contacts'>
                        <div className='header__contacts-content'>
                            <img src={phoneImg} alt='phone' />
                            <div className='header__contacts-text'>
                                {' '}
                                +999-834-34-34{' '}
                                <span>
                                    <br />
                                    Contact us for booking
                                </span>
                            </div>
                        </div>
                    </div>
                    <Button className='button-wrapper ' title='Book a table' />
                </div>
                <div className='header__hero hero'>
                    <div className='hero__text'>
                        <h1 className='hero__text-main'>
                            Welcome to{' '}
                            <span>
                                <br />
                                Our Restaurant
                            </span>
                        </h1>
                        <div className='hero__text-second'>
                            Home of the best food
                        </div>
                    </div>
                    <Button className='button-wrapper' title='View menu' />
                </div>
                <div className='header__intro'>
                    <CardIntro
                        hero={cardInfo[0]['hero']}
                        span={cardInfo[0]['span']}
                        desc={cardInfo[0]['desc']}
                    />
                    <CardIntro
                        hero={cardInfo[1]['hero']}
                        span={cardInfo[1]['span']}
                        desc={cardInfo[1]['desc']}
                    />
                    <CardIntro
                        hero={cardInfo[2]['hero']}
                        span={cardInfo[2]['span']}
                        desc={cardInfo[2]['desc']}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
