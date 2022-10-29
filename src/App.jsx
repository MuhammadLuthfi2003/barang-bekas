import React from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
  } from "react-router-dom"

import './styles/index.css';

import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

import Landingpage from './dirs/landingpage.jsx';
import About from './dirs/about.jsx';
import Categories from './dirs/categories.jsx';
import Contact from './dirs/contact.jsx';

function App() {
    return (
        <>
            <div>
                <Navbar />
                <div className='main'>
                    <Switch>
                        <Route path='/' element={<Landingpage />} />
                        <Route path='/categories' element={<Categories />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default App;
