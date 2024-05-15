import Card from '../components/Card';
import './BlogPage.css'

import React from 'react';
import blogData from '../assets/blogData.js';

const BlogPage = () => {

    return (
        <div id='blog-page'>
            <div className='blog-area'>
                {blogData.map(blog=>(
                    <Card
                        id = {blog.id}
                        type='blog'
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

export default BlogPage;
