import React from 'react';
import { Link } from "react-router-dom";

import '../styles/navbar.css';

//import image
import ylxdefault from '../assets/logo_ylx.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props)   

        this.activateNav = this.activateNav.bind(this);
    }

    activateNav() {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];

        navbarLinks.classList.toggle('active');
    }

    render() {
        return (
            <nav className='navbar'>
                <a className='navbar-logo h-full' href="/">
                    <img src={ylxdefault} alt='logo' className='ylx_default'/>
                    <div className="navbar-text self-center text-xl">YLX.com</div>
                </a>

                <button className='toggle-btn' onClick={this.activateNav}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </button>

                <div className='navbar-links'>
                    <ul>
                        <li>
                            <Link to='/' className='navbar-links-dir'>Home</Link>
                        </li>
                        <li>
                            <Link to='/categories' className='navbar-links-dir'>Categories</Link>
                        </li>
                        <li>
                            <Link to='/about' className='navbar-links-dir'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='navbar-links-dir'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;