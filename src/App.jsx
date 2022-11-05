import React from 'react';
import {
    BrowserRouter,
    Routes as Switch,
    Route,
    createRoutesFromElements
  } from "react-router-dom"

  // main css
import './styles/index.css';
// components
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
// main dirs
import Landingpage from './dirs/landingpage.jsx';
import About from './dirs/about.jsx';
import Contact from './dirs/contact.jsx';
import ErrorPage from './dirs/error.jsx';
// category dir
import CategoriesList from './dirs/categories.jsx';
import SpecificCategories from './dirs/spesific-categories.jsx';
// searchdir
import SearchBar from './dirs/searchbar.jsx';
import SearchResults from './dirs/searchresults.jsx';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path='/' element={<Landingpage />} >
                <Route path='categories' element={<CategoriesList />} />
                <Route path='categories/:category' element={<SpecificCategories />} />

                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />

                <Route path='search' element={<SearchBar />} >
                    <Route path=':keyword' element={<SearchResults />} />
                </Route>

                <Route path="*" element={<ErrorPage />} />
            </Route>
    )
);

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <div className='main'>
                    <Switch>
                        <Route path='/' element={<Landingpage />} />

                        <Route path='/categories' element={<CategoriesList />} />
                        <Route path='/categories/:category' element={<SpecificCategories />} />

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
        </BrowserRouter>
    )
}

// function App() {
//     return (
//         <RouterProvider router={router}/>
//     )
// }

export default App;
