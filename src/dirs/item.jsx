import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import '../styles/item.css';

import ItemBox from '../mini-components/item-box.jsx';

const BASE_URL = 'https://barbek.masuk.id/api/product?id=';
const BASE_URL_CATEGORY = "https://barbek.masuk.id/api/product?category=";
const RECOMMENDED_KEY = 'recommendations';

function Item() {
    const {itemId} = useParams();

    const [item, setItem] = useState(null);
    const [idCategory, setIdCategory] = useState(null);
    const [relatedItems, setRelatedItems] = useState('');

    const formatCurrency = (num) => {
        num = parseInt(num);
        return new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(num);
    }

    const randomize = (array) => {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    const setRecommendations = (items) => {
        sessionStorage.setItem(RECOMMENDED_KEY, JSON.stringify(items));
    }

    const getRecommendations = () => {
        return JSON.parse(sessionStorage.getItem(RECOMMENDED_KEY));
    }

    React.useEffect(() => {
        //set storage
        if(typeof(Storage) !== 'undefined') {
            sessionStorage.setItem(RECOMMENDED_KEY, JSON.stringify([]));
        }

        axios.get(BASE_URL + itemId)
            .then(res => {
                setItem(res.data.data[0]);
                setIdCategory(res.data.data[0].category_id);
                
                axios.get(BASE_URL_CATEGORY + res.data.data[0].category_id)
                    .then(res => {
                        const categoryItems = res.data.data;
                        let recommended = []

                        for (let i = 0; i < categoryItems.length; i++) {
                            if (categoryItems[i].id !== itemId) {
                                recommended.push(categoryItems[i]);
                            }
                        }

                        const shuffledRecommended = randomize(recommended);     
                        setRecommendations(shuffledRecommended);
                        
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            // .then(() => {

            //     // axios.get(BASE_URL_CATEGORY + idCategory)
            //     //     .then(res => {
            //     //         setRelatedItems(res.data.data);
            //     //     })
            //     //     .then(() => {

            //     //     })
            //     //     .catch(err =>{
            //     //         console.log(err);
            //     //     })
            // })
            .catch(err => {
                console.log(err);
            })        
    }, []);


    if (!item) return null;
    if (!idCategory) return null;
    // if (!relatedItems) return null;


    return (
        <div className='item-dir'>
            <h1 className='item-specific-title'>{item.name}</h1>
            <div className='item-specific-info'>

                <div className='item-specific-visual'>
                    <div className='item-specific-image'>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className='contact-info'>
                        <div className='harga-title'>Harga</div>
                        <div className='harga-info'>
                            {formatCurrency(item.price)}
                        </div>
                        <div className='contact-link'>
                            {/*nomor yang random, mungkin bisa diganti nanti */}
                            <div className='contact-link-title'>Opsi Pembelian</div>
                            <a className='contact-link-a' href={`https://wa.me/6281212345678?text=Halo%20YLX%2C%20saya%20mau%20pesan%20${item.name}`} target='_blank' rel='noreferrer'>
                                <i class="fa-brands fa-whatsapp wa-icon"></i>
                                <div className='contact-content'>Hubungi Penjual</div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='item-specific-detail'>
                    <div className='item-specific-detail-title'>
                        <h2>Deskripsi Barang</h2>
                    </div>
                    <div className='item-specific-detail-desc'>
                        <p>{item.description}</p>
                    </div>
                    <div className='item-specific-detail-moreinfo'>
                        <h3 className='item-specific-detail-title'>Informasi Tambahan</h3>
                        <div className='item-specific-detail-weight'>Berat Benda : {parseInt(item.weight) / 1000} kg</div>
                        <div className='item-specific-detail-stock'>Stok Benda : {item.stock}</div>
                    </div>
                </div>

                {/*recommendation system, will be later added .\ */}            
                <div className='recommended-products'>
                    <div className='recommended-products-title'>Rekomendasi Produk Lainnya</div>
                    <div className='recommended-products-list'>
                        {
                            (getRecommendations.length > 0)

                            ?
                            getRecommendations().map((item, index) => {
                                return (
                                    <ItemBox
                                        key={index}
                                        title={item.name}
                                        image={item.image}
                                        description={item.description}
                                        price={item.price}
                                        itemId={item.id}
                                        categoryId={item.category_id}
                                    />
                                )
                            })

                            :
                            <div className='no-item'>
                                <div className='no-item-title'>Tidak ada rekomendasi lainnya</div>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Item;