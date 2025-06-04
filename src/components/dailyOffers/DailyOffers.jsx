import SectionHero from '../subComponets/sectionsHero/SectionHero';
import './dailyOffers.css';

import dailyOffersImgMain from './../../source/pizza.png';
import CardOffers from '../subComponets/cards/CardOffers';

const DailyOffers = () => {
    return (
        <section className='daily-offers'>
            <div className='container'>
                <div className='daily-offers__wrapper'>
                    <SectionHero title='Our' span=' Offers' />
                    <div className='daily-offers__content'>
                        <div className='daily-offers__img-main'>
                            <img src={dailyOffersImgMain} alt='Pizza' />
                        </div>
                        <div className='daily-offers__cards'>
                            <CardOffers name='Hamburger' price='34' />
                            <CardOffers name='Hamburger' price='34' />
                            <CardOffers name='Hamburger' price='34' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DailyOffers;
