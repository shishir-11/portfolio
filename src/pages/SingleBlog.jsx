import { useParams } from 'react-router-dom';

import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css'
import React, { useEffect, useState } from 'react';
import blogData from '../assets/blogData';
import parse from 'html-react-parser'
import githubIcon from '../assets/github.svg'
import linkIcon from '../assets/link.svg'
import Tags from '../components/Tags';
import './SingleBlog.css'


const SingleBlog = () => {
    const [content,setContent] = useState('')
    const params = useParams();
    const blogID = parseInt(params.id);
    const blog = blogData.find(blog=>blog.id===blogID)

    async function fetchContent(){
        if(blog && blog.content){
            const resp = await fetch(`/portfolio/${blog.content}`);
            const data = await resp.text()
            setContent(data)
            console.log(data);
        }
    }

    useEffect(()=>{
        fetchContent()
    },[blogID])

    useEffect(()=>{
        const nodes = document.querySelectorAll('pre');
        nodes.forEach(node=>hljs.highlightBlock(node));

    },[content])

    if(!blog){
        return <div>Blog not Found</div>
    }
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
