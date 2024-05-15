import { Link, useNavigate } from 'react-router-dom';
import './Card.css'

import React from 'react';

import githubIcon from '../assets/github.svg'
import codeIcon from '../assets/code.svg'
import blogIcon from '../assets/blog.svg'
import linkIcon from '../assets/link.svg'
import Tags from './Tags';

// text , type , hosted link , github link , tags , title  

const Card = (props) => {
    const navigate = useNavigate();
    return (
        <div className='simple-card' onClick={()=>{navigate('/')}}>
                <div className='simple-card-content'>
                    <div className='top-section'>
                        <img src={codeIcon} width={'40px'} className='simple-card-content-type'/>
                        <div className='simple-card-link-section'>
                            <a href={'https://github.com/shishir-11'}><img src={githubIcon} width={'30px'}/></a>
                            <a href={'https://github.com/shishir-11'}><img src={linkIcon} width={'30px'}/></a>
                        </div>
                    </div>

                    <div className='simple-card-content-text'>
                        <Link to={''}><h2 className='roboto-bold'>GSoC: Week 1 Initialising the Project and Introduction</h2></Link>
                        <p className='roboto-regular'>A small little description about how i want to change the goddamn world by contributing to GSoC</p>
                    </div>

                    <div className='simple-card-content-foot'>
                        <Tags text='GSoC'/>
                    </div>
                    {/* {props.content} */}
                </div>
        </div>
    );
}

export default Card;
