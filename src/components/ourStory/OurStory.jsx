import storyPicCenter from './../../source/storyPic-center.png';
import storyPicRight from './../../source/storyPic-right.png';
import storyPicLeft from './../../source/storyPic-left.png';

import SubHeader from '../subComponets/sectionsHero/SectionHero';

import './ourStory.css';

const OurStory = () => {
    return (
        <section className='our-story'>
            <div className='container'>
                <div className='our-story-wrapper'>
                    <div className='our-story__text-card'>
                        <SubHeader title='Our' span=' Story' />
                        <p className='our-story__text'>
                            Like any other unique place, we have our own special
                            story. The idea of ​​the restaurant came to the
                            founders unexpectedly. During a walk in the forest,
                            the creator of our restaurant got stuck hundreds of
                            kilometers from the nearest settlement. Far from
                            civilization and communication, they had to arrange
                            a simple life for themselves for a while, get and
                            cook their own food.
                        </p>
                        <div className='our-story__data data'>
                            <div className='data__item'>
                                <div className='data__number'>234</div>
                                <p className='data__text'>Drinks</p>
                            </div>
                            <div className='data__item'>
                                <div className='data__number'>25</div>
                                <p className='data__text'>Food</p>
                            </div>
                            <div className='data__item'>
                                <div className='data__number'>34</div>
                                <p className='data__text'>Bits</p>
                            </div>
                        </div>
                    </div>
                    <div className='our-story__images-wrapper'></div>
                    <div className='our-story__images'>
                        <img
                            src={storyPicCenter}
                            alt='A piece of cake on a wooden plate'
                            className='our-story__img-center'
                        />
                        <img
                            src={storyPicLeft}
                            alt='A lot of food dishes'
                            className='our-story__img-left'
                        />
                        <img
                            src={storyPicRight}
                            alt='Restaurant room'
                            className='our-story__img-right'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
