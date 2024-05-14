import './Tags.css'

import React from 'react';

const Tags = (props) => {
    return (
        <div id='tags' className='roboto-regular'>
            {props.text}
        </div>
    );
}

export default Tags;
