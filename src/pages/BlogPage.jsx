import Card from '../components/Card';
import './BlogPage.css'

import React from 'react';

const BlogPage = () => {
    return (
        <div id='blog-page'>
            <div className='blog-area'>
                <Card content='abcdefghijklmnopqrstuvwxyz'/>
                <Card content='abcdefghijklmnopqrstuvwxyz'/>
                <Card content='abcdefghijklmnopqrstuvwxyz'/>
                <Card content='abcdefghijklmnopqrstuvwxyz'/>
                <Card content='abcdefghijklmnopqrstuvwxyz'/>
                {/* <Card content='abcdefghijklmnopqrstuvwxyz'/> */}
            </div>
        </div>
    );
}

export default BlogPage;
