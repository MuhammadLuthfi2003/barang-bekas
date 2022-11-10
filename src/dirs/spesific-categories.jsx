import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import '../styles/spesific-categories.css'

import ItemBox from '../mini-components/item-box';

const BASE_URL = 'https://barbek.masuk.id/api/product?category=';
const BASE_URL_CATEGORY = 'https://barbek.masuk.id/api/category?id=';

/*
category_id: "1"
description: "Laptop Infinix Inbook X1, \r\nkeren\r\ndengan intel core i3"
id: "1"
image: "https://barbek.masuk.id/assets/img/1667789260-yamaha-vino-mo…-didukung-honda-dengan-konsumsi-bbm-tembus-80-kmliter-3.jpeg"
name: "Laptop Infinix Inbook X3"
price: "5900000"
stock: "89"
weight: "1300"
*/

function SpecificCategories() {

    const [item, setItem] = useState([]);
    const [category, setCategory] = useState(null);

    let {categoryId} = useParams();

    React.useEffect(() => {
        // getting the items in the category
        axios.get(BASE_URL + categoryId)
        .then(res => {
            if (res.data.data != null) {
                setItem(res.data.data);
            }
            setCategory(res.data.category);
            setCategory(category[0].toUpperCase() + category.substring(1));
        })
        .catch(err => {
            console.log(err);
        })
    });

    if (!item) return null; 

    
    return (
        <div className="category-content">
            <div className="category-title">
                <h1>{category}</h1>
            </div>
            <div className="item-list">
                {
                    (item.length > 0) ?
                    item.map((item, index) => {
                        return (
                            <ItemBox 
                                key={index}
                                image={item.image}
                                title={item.name}
                                price={item.price}
                                description={item.description}
                                itemId={item.id}
                                category={categoryId}
                            />
                        )
                    })

                    :
                    <div className="no-item">
                        <h1>Belum ada item di kategori ini</h1>
                    </div>
                }
            </div>
        </div>
    )
}

export default SpecificCategories;