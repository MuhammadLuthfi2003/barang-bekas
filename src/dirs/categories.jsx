import React, { useState } from 'react';
import axios from 'axios';

import CategoryItem from '../mini-components/category-item';

import '../styles/categories.css';

const BASE_URL = 'https://barbek.masuk.id/api/category';

function Categories() {

    const [categories, setCategories] = useState(null);

    React.useEffect(() => {
        axios.get(BASE_URL)
            .then(res => {
                setCategories(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    if (!categories) return null; 
      
    return (
        <div className='main'>
            <div className='categories'>
                <h1 className='categories-title'>Our Categories</h1>
                {/* <div className='categories-list'>
                    {
                        categories.map((category, index) => {
                            return (
                                <CategoryItem
                                    key={index}
                                    image={category.image}
                                    title={category.name}
                                    categoryId={category.id}
                                />
                            )
                        })
                    }
                </div> */}

                {
                    (categories.length > 0)

                    ?
                    <div className='categories-list'>
                        {
                            categories.map((category, index) => {
                                return (
                                    <CategoryItem
                                        key={index}
                                        image={category.image}
                                        title={category.name}
                                        categoryId={category.id}
                                    />
                                )
                            })
                        }
                    </div>

                    :
                    <h1 className='no-item'>Tidak ada kategori yang ditemukan</h1>
                }
            </div>
        </div>
    )
}

export default Categories;