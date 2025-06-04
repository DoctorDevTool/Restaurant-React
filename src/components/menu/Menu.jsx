import CardMenu from '../subComponets/cards/CardMenu';

import './menu.css';

const menuItems = [
    {
        name1: 'Hamburger Maxi',
        desc: 'The biggest amount of meat',
        price: '34',
        recStatus: 'recommended',
    },
    {
        name1: 'Hamburger Maxi',
        desc: 'The biggest amount of meat',
        price: '34',
        recStatus: '',
    },
    {
        name1: 'Hamburger Maxi',
        desc: 'The biggest amount of meat',
        price: '34',
        recStatus: '',
    },
];

const Menu = () => {
    return (
        <section className='menu'>
            <div className='container'>
                <h2 className='menu__hero'>Our Menu</h2>
                <div className='menu__cards'>
                    <CardMenu
                        name={menuItems[0].name1}
                        desc={menuItems[0].desc}
                        price={menuItems[0].price}
                        recStatus={menuItems[0].recStatus}
                    />
                    <CardMenu
                        name={menuItems[1].name1}
                        desc={menuItems[1].desc}
                        price={menuItems[1].price}
                        recStatus={menuItems[1].recStatus}
                    />
                    <CardMenu
                        name={menuItems[2].name1}
                        desc={menuItems[2].desc}
                        price={menuItems[2].price}
                        recStatus={menuItems[2].recStatus}
                    />
                </div>
            </div>
        </section>
    );
};

export default Menu;
