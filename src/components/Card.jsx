import { Link} from 'react-router-dom';
import './Card.css'

import React from 'react';

import githubIcon from '../assets/github.svg'
import codeIcon from '../assets/code.svg'
import blogIcon from '../assets/blog.svg'
import linkIcon from '../assets/link.svg'
import Tags from './Tags';

// text , type , hosted link , github link , tags , title  

const Card = (props) => {
    
    return (

        <div className='simple-card'>
                <div className='simple-card-content'>
                    <div className='top-section'>
                        <img src={props.type==='blog'?blogIcon:codeIcon} width={'40px'} className='simple-card-content-type'/>
                        <div className='simple-card-link-section'>
                            <a href={props.github_link}><img src={githubIcon} width={'30px'}/></a>
                            <a href={props.external_link}><img src={linkIcon} width={'30px'}/></a>
                        </div>
                    </div>

                    <div className='simple-card-content-text'>
                        <Link to={props.type==='blog'?`/${props.type}s/${props.id} `:props.github_link}><h2 className='roboto-bold'>{props.title}</h2></Link>
                        <p className='roboto-regular'>{props.subtitle}</p>
                    </div>

                    <div className='simple-card-content-foot'>
                        {props.tags.map(tag =>(
                            <Tags text={tag} key={tag}/>
                        ))}
                        {/* <Tags text/> */}
                    </div>
                    {/* {props.content} */}
                </div>
        </div>
    );
}

export default Card;
