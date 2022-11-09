import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import '../styles/item.css';

import ItemBox from '../mini-components/item-box.jsx';

const BASE_URL = 'https://barbek.masuk.id/api/product?id=';
const BASE_URL_CATEGORY = "https://barbek.masuk.id/api/product?category=";

function Item() {
    const {itemId} = useParams();

    const [item, setItem] = useState(null);
    const [idCategory, setIdCategory] = useState(null);
    const [relatedItems, setRelatedItems] = useState(null);

    const formatCurrency = (num) => {
        num = parseInt(num);
        return new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(num);
    }

    React.useEffect(() => {
        axios.get(BASE_URL + itemId)
            .then(res => {
                setItem(res.data.data[0]);
                setIdCategory(res.data.data[0].category_id);
            })
            .then(() => {
                axios.get(BASE_URL_CATEGORY + idCategory)
                    .then(res => {
                        setRelatedItems(res.data.data);
                    })
                    .then(() => {

                    })
                    .catch(err =>{
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })

        //fetch category data for item recommendation
        // axios.get(BASE_URL_CATEGORY + idCategory)
        //     .then(function(res) {
        //         setRelatedItems(res.data.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        
        
            
    }, []);


    if (!item) return null;
    if (!idCategory) return null;
    if (!relatedItems) return null;


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
                {/* <div className='recommended-products'>
                    <div className='recommended-products-title'>Rekomendasi Produk Lainnya</div>
                    <div className='recommended-products-list'>
                        {
                            // relatedItems.map((item, index) => {
                            //     return (
                            //         <ItemBox
                            //             key={index}
                            //             title={item.name}
                            //             image={item.image}
                            //             description={item.description}
                            //             price={item.price}
                            //             itemId={item.id}
                            //             categoryId={item.category_id}
                            //         />
                            //     )
                            // })
                        }
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Item;