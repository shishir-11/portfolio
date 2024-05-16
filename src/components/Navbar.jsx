import { Link} from 'react-router-dom';
import './Navbar.css'

import React from 'react';

const Navbar = () => {
    // const path = useLocation().pathname;
    // console.log(path);
    
    return (
        <nav className='navbar'>
            <div className='logo-area jaini-purva-regular'>
                <Link to={'/portfolio'}>SHISHIR</Link>
            </div>

            <div className='link-section roboto-regular'>
                <Link to='/portfolio'>Home</Link>
                {/* <Link to={'/about'}>About</Link> */}
                <Link to={'/portfolio/blogs'}>Blogs</Link>
                <Link to={'/portfolio/projects'}>Projects</Link>
            </div>
        </nav>
    );
}

export default Navbar;
