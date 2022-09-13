import React from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
  } from "react-router-dom"

import './styles/index.css';

import {Navbar} from './components/navbar.jsx';
import {Landingpage} from './dirs/landingpage';
import {About} from './dirs/about';
import {Categories} from './dirs/categories';
import {Contact} from './dirs/contact';

class App extends React.Component {


    render() {
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
        </div>
    }
}

export default App;
