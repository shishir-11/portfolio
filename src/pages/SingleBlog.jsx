import { useParams } from 'react-router-dom';

import './SingleBlog.css'

import React, { useEffect, useState } from 'react';
import blogData from '../assets/blogData';
import parse from 'html-react-parser'


const SingleBlog = () => {
    const [content,setContent] = useState('')
    const params = useParams();
    const blogID = parseInt(params.id);
    const blog = blogData.find(blog=>blog.id==blogID)
    
    async function fetchContent(){
        const resp = await fetch(`/${blog.content}`);
        const data = await resp.text()
        setContent(data)
        console.log(data);
    }

    useEffect(()=>{
        fetchContent()
    },[])
    return (
        <div id="single-page-blog">
            <div className='blog-container'>
                {parse(content)}
            </div>
        </div>
    );
}

export default SingleBlog;
