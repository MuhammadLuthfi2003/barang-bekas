import React from 'react';

import '../styles/index.css';

//import components
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

function Categories() {
    return (
        <div className='main'>
            <Navbar />
            <div className='categories'>
                <h1>Categories</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Categories;