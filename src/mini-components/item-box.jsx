import React from 'react';

function ItemBox({title, image, description, price, itemId}) {

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
            </div>

            <div className='item-price'>
                {price}
            </div>

            <div className='item-button'>
                <button className='item-button-btn' onClick={() => {handleButtonClick()}}>Lihat</button>
            </div>

        </div>
    )
}

export default ItemBox;