import './HomePage.css'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import React from 'react';

const HomePage = () => {
    return (
        <div className='home-page'>
               <div className='contact-section'>
                    <a href='https://github.com/shishir-11'><img src={github} width={'40px'}/></a>
                    <a href='https://www.linkedin.com/in/shishir-kushwaha-450437258/'><img src={linkedin} width='40px'/></a>
                    <a href='https:/www.instagram.com/shishir_.05'><img src={instagram} width={'35px'}/></a>
               </div>

               <div className='info-section'>

               </div>

               <div className='image-section'>
               </div>
        </div>
    );
}

export default HomePage;
