import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

import '../styles/searchresults.css';

function SearchResults() {
    const {keyword} = useParams();

    return (
        <>
            <div className='main'>
                <div className='search-results'>
                    <h1>Hasil pencarian untuk: {keyword}</h1>
                </div>
            </div>
        </>
    )
}

export default SearchResults;
