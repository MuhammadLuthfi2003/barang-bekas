import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import css
import '../styles/landingpage.css';

function Landingpage() {
    return (
        <div>
            <div className="header">
                <div className="header-title">YLX pusatnya nge-deal!</div>
                
                <div className="search-input-wrapper">
                    <div className="search-input">
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                        <input type="text" className="search-input-field" placeholder="Cari barang yang kamu mau"/>
                    </div>
                </div>
            </div>

            <div className="categories">

            </div>

            <div className="why-ylx">

            </div>

            <div className="footer">

            </div>

        </div>
    )
}

export default Landingpage;