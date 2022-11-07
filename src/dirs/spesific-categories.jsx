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

    const [item, setItem] = useState(null);
    const [category, setCategory] = useState(null);

    let {categoryId} = useParams();

    React.useEffect(() => {
        // getting the items in the category
        axios.get(BASE_URL + categoryId)
        .then(res => {
            setItem(res.data.data);
        })
        .catch(err => {
            console.log(err);
        })

        //get category title by id
        axios.get(BASE_URL_CATEGORY + categoryId)
        .then(res => {
            setCategory(res.data.data[0].name);
            //capitalize it
            setCategory(category[0].toUpperCase() + category.substring(1));
        })
        .catch(err => {
            console.log(err);
        })

        
    });

    if (!item) return null; 

    

    return (
        <div className="main">
            <div className="Title">
                <h1>{category}</h1>
            </div>
            <div className="item-list">

            </div>
        </div>
    )
}

export default SpecificCategories;