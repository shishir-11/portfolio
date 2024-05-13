import './HomePage.css'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import illustration3 from '../assets/illustration3.png'
import React from 'react';

const HomePage = () => {
    return (
        <div className='home-page'>
               <div className='contact-section'>
                   <hr/>

                    <a href='https://github.com/shishir-11'><img src={github} width={'40px'}/></a>
                    <a href='https://www.linkedin.com/in/shishir-kushwaha-450437258/'><img src={linkedin} width='40px'/></a>
                    <a href='https:/www.instagram.com/shishir_.05'><img src={instagram} width={'35px'}/></a>
               </div>

               <div className='info-section'>
                    <div className='line-one roboto-medium'><p>Hello everyone, I'm</p></div>
                    <div className='name roboto-black'><h1>Shishir Kushwaha.</h1></div>
                    <div className='subtitle'><h2>I'm a wannabe Developer.</h2></div>
                    <div className='description roboto-regular'><p>I'm a sophomore at IIT BHU, diving deep into the realms of Mathematics and Computing.<br/> With a knack for software development, I'm busy sharpening my coding skills.<br/> You'll often find me tinkering with open-source projects, fueled by a passion<br/>for making a difference through tech. Let's connect and explore how we can create<br/> some cool stuff together!</p></div>
               </div>

               <div className='image-section'>
                    <img src={illustration3} width={'40%'}/>
               </div>
        </div>
    );
}

export default HomePage;
