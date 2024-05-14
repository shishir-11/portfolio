import './Card.css'

import React from 'react';

const Card = (props) => {
    return (
        <div className='simple-card'>
            {props.content}
        </div>
    );
}

export default Card;
