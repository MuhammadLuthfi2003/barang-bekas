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
import CategoriesList from './dirs/categories.jsx';
import Contact from './dirs/contact.jsx';
import ErrorPage from './dirs/error.jsx';

import SearchBar from './dirs/searchbar.jsx';
import SearchResults from './dirs/searchresults.jsx';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <div className='main'>
                    <Switch>
                        <Route path='/' element={<Landingpage />} />

                        <Route path='/categories' element={<CategoriesList />} >
                            
                        </Route>

                        <Route path='/about' element={<About />} />
                        <Route path='/contact' element={<Contact />} />

                        <Route path='/search' element={<SearchBar />} >
                            <Route path=':keyword' element={<SearchResults />} />
                        </Route>

                        <Route path="*" element={<ErrorPage />} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

export default App;
