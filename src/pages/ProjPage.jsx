import Card from '../components/Card';
import './BlogPage.css'

import React from 'react';
import projData from '../assets/projData.js';

const ProjPage = () => {

    return (
        <div id='blog-page'>
            <div className='blog-area'>
                {projData.map(blog=>(
                    <Card
                        id = {blog.id}
                        type='code'
                        title={blog.title}
                        subtitle={blog.subtitle} 
                        key={blog.id} 
                        tags={blog.tags}
                        github_link={blog.github_link}
                        external_link={blog.external_link}
                        />
                ))}
            </div>
        </div>
    );
}

export default ProjPage;
