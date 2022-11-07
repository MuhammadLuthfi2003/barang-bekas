import React from 'react';
import {
    BrowserRouter,
    Routes as Switch,
    Route,
    createRoutesFromElements,
    Outlet
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
import Categories from './dirs/categories.jsx';
import SpecificCategories from './dirs/spesific-categories.jsx';
import Item from './dirs/item.jsx';

// searchdir
import SearchBar from './dirs/searchbar.jsx';
import SearchResults from './dirs/searchresults.jsx';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <div className='main'>
                    <Switch>
                        <Route path='/' element={<Landingpage />} />
{/* 
                        <Route path='/categories' element={<Empty />} >
                            <Route path='root' element={<CategoriesList />} />
                            <Route path=':category' element={<SpecificCategories />} />
                        </Route> */}

                        <Route path='categories' >
                            <Route index element={<Categories />} />
                            <Route path=':categoryId' element={<SpecificCategories />} />
                        </Route>

                        <Route path='item'>
                            <Route path=':itemId' element={<Item />} />
                        </Route>

                        <Route path='about' element={<About />} />
                        <Route path='contact' element={<Contact />} />

                        <Route path='search' element={<SearchBar />} >
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
