import './HomePage.css'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import React from 'react';

const HomePage = () => {
    return (
        <div className='home-page'>
               <div className='contact-section'>
                    <img src={github} />
                    <img src={linkedin}/>
               </div>

               <div className='info-section'>

               </div>

               <div className='image-section'>
               </div>
        </div>
    );
}

export default HomePage;
