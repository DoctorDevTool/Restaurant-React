import { useState } from 'react';
import './slider.css';

const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='slider'>
            <div className='container'>
                <div className='slider__wrapper'>
                    <div className='slider__text'>
                        {slides[currentIndex].text}
                    </div>
                    <div className="slider__img-wrapper" >
                        <div className="slider__img" style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
                    </div>
                    <h3 className='slider__hero-title'>
                        {slides[currentIndex].title}
                    </h3>
                    <h4 className='slider__hero-name'>
                        {slides[currentIndex].name}
                    </h4>
                    <div className='slider__dot-wrapper'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                className='slider__dots'
                                onClick={() => goToSlide(slideIndex)}>
                                •
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
