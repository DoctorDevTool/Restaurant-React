import './styles/reset.css';
import './styles/common.css';
import Header from './components/header/Header';
import Main from './components/main/main';
import Slider from './components/carousel/Slider';

import { useEffect, useState } from 'react';

function App() {
    // const [slides, setInfo] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch('/info.json');
    //         const data = await res.json();
    //         console.log('data',data);
    //         setInfo(data);
            
    //     }
    //     fetchData();
    //     console.log('slides',slides);
        
    // }, []);
    const slides = [
        {
            url: 'http://localhost:3000/customer.png',
            title: 'Customer',
            text: 'I will remember my birthday spent in this restaurant for a long time! A piece of native Armenia!!! Special thanks for the complimentary fruit plate. We will recommend this restaurant to our friends and relatives also abroad, traveling to St. Petersburg!!!',
            name: 'Nick',
        },
        {
            url: 'http://localhost:3000/customer.png',
            title: 'Owner',
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus expedita autem esse suscipit aspernatur placeat rem labore quos quaerat, cumque ipsum sequi et id libero nobis porro, tempora natus quasi!',
            name: 'Nick',
        },
        {
            url: 'http://localhost:3000/customer.png',
            title: 'Bartender',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae enim laboriosam qui culpa! Quibusdam sint voluptatibus cupiditate sunt commodi adipisci animi porro. Expedita, autem nulla? Ad alias ratione vero delectus?',
            name: 'Nick',
        },
    ];

    return (
        <div>
            <Header />
            <Main />
            <Slider slides={slides} />
        </div>
    );
}

export default App;
