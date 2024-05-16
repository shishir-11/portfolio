import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {HashRouterRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)

document.addEventListener('DOMContentLoaded', function() {
  const bg = document.getElementById('cursor-bg');
  document.addEventListener('pointermove',(e)=>{
    bg.style.display = 'block';
    bg.animate({
        top: e.pageY-200+ 'px',
        left: e.pageX-200 + 'px'
    },{
        duration:10,
        fill:'forwards'
    })
})
});

import ReactDOMServer from 'react-dom/server'
