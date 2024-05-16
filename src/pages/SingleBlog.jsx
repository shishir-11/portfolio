import { useParams } from 'react-router-dom';

import './SingleBlog.css'
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'
import React, { useEffect, useState } from 'react';
import blogData from '../assets/blogData';
import parse from 'html-react-parser'
import githubIcon from '../assets/github.svg'
import linkIcon from '../assets/link.svg'
import Tags from '../components/Tags';


const SingleBlog = () => {
    const [content,setContent] = useState('')
    const params = useParams();
    const blogID = parseInt(params.id);
    const blog = blogData.find(blog=>blog.id===blogID)

    async function fetchContent(){
        const resp = await fetch(`/${blog.content}`);
        const data = await resp.text()
        setContent(data)
        console.log(data);
    }

    useEffect(()=>{
        fetchContent()
    },[])

    useEffect(()=>{
        const nodes = document.querySelectorAll('pre');
        nodes.forEach(node=>hljs.highlightBlock(node));

    },[content])
    return (
        <div id="single-page-blog">
            <div className='blog-container-header'>
                <div className='left-part roboto-medium'>
                    <p>{blog.date}</p>
                </div>
                <div className='right-part'>
                    <a href={blog.github_link}><img src={githubIcon} width={'30px'}/></a>
                    <a href={blog.external_link}><img src={linkIcon} width={'30px'}/></a>
                </div>
            </div>
            <div className='blog-container roboto-regular'>
                <div className='tag-section'>{blog.tags.map(tag=><Tags text={tag}/>)}</div>
                {parse(content)}
            </div>
        </div>
    );
}

export default SingleBlog;
