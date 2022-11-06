import React, {useState} from 'react';
import {useParams} from 'react-router-dom';

import '../styles/spesific-categories.css'


function SpecificCategories() {

    const {categoryTitle} = useParams();

    console.log(categoryTitle);
    return (
        <div className="main">
            <div className="Title">
                <h1>{categoryTitle}</h1>
            </div>
            <div className="item-list">
                
            </div>
        </div>
    )
}

export default SpecificCategories;