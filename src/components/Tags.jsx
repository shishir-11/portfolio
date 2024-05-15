import './Tags.css'

import React from 'react';

const Tags = (props) => {
    return (
        <div id='tags' className='roboto-medium'>
            {props.text}
        </div>
    );
}

export default Tags;
