import React from 'react';

import '../styles/index.css';

//import components
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

function Contact() {
    return (
        <div className='main'>
            <Navbar />
            <div className='contact'>
                <h1>Contact</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;