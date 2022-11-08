import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

//import mini component
import CategoryItem from '../mini-components/category-item';

//import css
import '../styles/landingpage.css';

// temp import img, delete later
import car from '../assets/stock photos/car.png';
import laptop from '../assets/stock photos/laptop.png';
import phone from '../assets/stock photos/phone.png';


const items = [
    {
        title : 'laptop',
        image : laptop,
        categoryId : 1
    },
    {
        title : 'handphone',
        image : phone,
        categoryId : 2
    },
    {
        title : 'mobil',
        image : car,
        categoryId : 3
    }
]

const BASE_URL = 'https://barbek.masuk.id/api/category';

function Landingpage() {

    const [search,setSearch] = useState('');
    const [categories, setCategories] = useState(null);

    const handleKeyDown = event => {
    
        if (event.key === 'Enter') {
            location.href = `/search/${search}`;
        }
    };

    React.useEffect(() => {
        axios.get(BASE_URL)
        .then(res => {
            //only display 3 categories for landing page
            setCategories(res.data.data.slice(0,3));
        })
        .catch(err => {
            console.log(err);
        })
    })

    if (!categories) return null;

    return (
        <div className='main'>
            <div className="header">
                <div className="header-title">YLX pusatnya nge-deal!</div>
                
                <div className="search-input-wrapper">
                    <div className="search-input">
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                        <div className='search-input-field-wrapper'>
                            <input type="text" className="search-input-field" placeholder="Cari barang yang kamu mau" 
                            onKeyDown={handleKeyDown}
                            onChange={event => setSearch(event.target.value)}/>
                            <button className="search-input-button" value="Cari"
                            onChange={event => setSearch(event.target.value)} 
                            onClick={() => location.href = `/search/${search}`}>Cari</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="categories">
                <div className="categories-header">
                    Our Categories
                </div>
                <div className="categories-list">
                    {
                        categories.map((category, index) => {
                            return (
                                <CategoryItem 
                                key={index}
                                title={category.name}
                                image={category.image}
                                categoryId={category.id}/>
                            )
                        })
                    }
                </div>
                <div className="categories-footer">
                    <div className="categories-footer-text">dan lebih banyak lagi...</div>
                    <div className="categories-footer-button">
                        <button type="button" className="categories-footer-button-text" onClick={() => {location.href = '/categories'}}>Lihat Semua</button>
                    </div>
                </div>
            </div>

            <div className="why-ylx">
                <div className="why-ylx-header">
                    Kenapa YLX.com?
                </div>
                <div className="why-ylx-list">
                    <div className="why-ylx-list-item">
                        <div className="why-ylx-list-item-icon">
                            <i class="fa-solid fa-truck why-ylx-icon-truck"></i>
                        </div>
                        <div className="why-ylx-list-item-text">
                            Pengiriman yang Cepat
                        </div>
                    </div>

                    <div className="why-ylx-list-item">
                        <div className="why-ylx-list-item-icon">
                            <i class="fa-solid fa-mobile why-ylx-icon-phone"></i>
                        </div>
                        <div className="why-ylx-list-item-text">
                            Admin yang On 24/7
                        </div>
                    </div>

                    <div className="why-ylx-list-item">
                        <div className="why-ylx-list-item-icon">
                            <i class="fa-solid fa-credit-card why-ylx-icon-card"></i>
                        </div>
                        <div className="why-ylx-list-item-text">
                            Opsi Pembayaran yang Banyak
                        </div>
                    </div>
                </div>
            </div>                 
        </div>
    )
}

export default Landingpage;