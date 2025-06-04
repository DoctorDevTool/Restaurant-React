import Button from '../subComponets/button/Button'

import './promo.css'

const Promo = () => {
    return ( 
        <section className="promo">
            <div className="promo-wrapper">
                <div className="container">
                    <div className="promo__content">
                        <h2 className="promo__hero">
                            Celebrate in one of the best restaurants.<br/><span> Only this month the bussines-lunch is $24</span>
                        </h2>
                        <Button className='button-wrapper promo__button' title='Book a table' />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Promo;