import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';

import '../styles/searchbar.css';

function SearchBar() {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            location.href = `/search/${search}`;
        }
    }

    return (
        <>
            
            <div className='main'>
                <div className='search'>
                    <h1 className='search-title'>Cari Barang yang anda inginkan</h1>
                    <div className="search-input-wrapper search-form">
                        <div className="search-input ">
                            <i className="fa-solid fa-magnifying-glass search-icon"></i>
                            <div className='search-input-field-wrapper'>
                                <input type="text" className="search-input-field" placeholder="Cari barang yang kamu mau" 
                                onKeyDown={handleKeyDown}
                                onChange={event => setSearch(event.target.value)}/>
                                <button className="search-input-button" value="Cari"
                                onChange={event => setSearch(event.target.value)} 
                                onClick={() => location.href = `/search/${search}`}>Cari</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default SearchBar;  