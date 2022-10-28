import React from 'react';
import { Link } from "react-router-dom";

import '../styles/footer.css';
import logo from '../assets/logo_ylx.png';

class Footer extends React.Component {


    render() {
        return (
            <div>
                <footer className='footer'>
                    <div className="footer-top">
                        <div className="footer-top-logo">
                            <img src={logo} className="footer-top-logo-img"/>
                            <div className="footer-top-logo-text">
                                <div className="footer-top-logo-text-title">
                                    YLX.com
                                </div>
                                <div className="footer-top-logo-text-subtitle">
                                    Your One Stop Thrift Online Shop
                                </div>
                            </div>
                        </div>
                        <div className="footer-links">
                            <ul>
                                <li>
                                    <Link to='/' className='footer-links-dir'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/categories' className='footer-links-dir'>Categories</Link>
                                </li>
                                <li>
                                    <Link to='/about' className='footer-links-dir'>About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='footer-body'>
                        <div className='footer-body-title'>Contact Us!</div>
                        <div className='footer-body-address'>Jln. Lorem Ipsum</div>
                        <div className="footer-body-number">+62810XXXXXXXX</div>
                    </div>

                    <div className="footer-bottom">
                        <div className='copyright'>Copyright Luthfi, Aliif, Fikri</div>
                        <div className='socials'>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                            <div className='circle'></div>
                        </div>
                    </div>

                </footer>
            </div>
        )
    }
}

export default Footer;