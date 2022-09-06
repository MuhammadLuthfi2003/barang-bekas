import react from 'react';
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route
  } from "react-router-dom"

import './styles/index.css';

import {Navbar} from './components/navbar.jsx';

class App extends React.Component {


    render() {
        <div>
            <Navbar />
            <div className='main'>
                <Switch>
                    
                    <Route path='/' element={<Landingpage />} />
                    <Route path='/categories' element={<Landingpage />} />

                </Switch>
            </div>
        </div>
    }
}

export default App
