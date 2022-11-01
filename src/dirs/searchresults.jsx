import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

import '../styles/searchresults.css';

function SearchResults() {
    const {keyword} = useParams();

    return (
        <>
            <div className='main'>
                <div className='search-results'>
                    <h1 className='search-results-title'>Hasil pencarian untuk: {keyword}</h1>
                    <div className='search-results-wrapper'>
                        {/*put css grid in here after getting the result */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResults;
