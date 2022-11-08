import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import '../styles/item.css';

const BASE_URL = 'https://barbek.masuk.id/api/product?id=';

function Item() {
    const {itemId} = useParams();

    const [item, setItem] = useState(null);
    const [category, setCategory] = useState(null);

    React.useEffect(() => {
        axios.get(BASE_URL + itemId)
            .then(res => {
                setItem(res.data.data[0]);
                setCategory(res.data.data[0].category_id);
            })
            .catch(err => {
                console.log(err);
            })

        //fetch category data
    })


    return (
        <div>
            <h1>Item</h1>
        </div>
    )
}

export default Item;