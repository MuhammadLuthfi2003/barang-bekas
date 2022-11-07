import React, {useState} from 'react';
import axios from "axios";


import '../styles/item-box.css';

function ItemBox({title, image, description, price, itemId, categoryId}) {

    const handleButtonClick = () => {
        location.href = `/item/${itemId}`;
    }

    return (
        <div className="item-card">
            <div className="item-image">
                <img src={image} alt="item-image" className="item-image-img"/>
            </div>
            <div className='content'>
                <div className='item-title'>
                    {title}
                </div>
                <div className='item-description'>
                    {description}
                </div>

                <div className='item-price'>
                    Rp. {price}
                </div>

                <div className='item-button'>
                    <button className='item-button-btn' onClick={() => {handleButtonClick()}}>Lihat</button>
                </div>
            </div>

        </div>
    )
}

export default ItemBox;