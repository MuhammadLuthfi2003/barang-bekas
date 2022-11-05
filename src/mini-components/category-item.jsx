import React from 'react';

import '../styles/category-item.css';

function CategoryItem({image, title, categoryId}) {

    const handleRedirect = () => {
        location.href = `/categories/${title}`;
    }

    return (
        <div className="category-item">
            <div className="category-item-title">
                {title}
            </div>
            <div className="category-item-image">
                <img src={image} className="category-item-image-img"/>
            </div>
            <div className='category-item-button'>
                <button className="category-item-button-btn" onClick={() => {handleRedirect()}}>Lihat Semua</button>
            </div>
        </div>
    )
}

export default CategoryItem;