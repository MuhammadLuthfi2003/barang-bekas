import React from 'react';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import '../styles/about.css';

function About() {
    return (
        <>
        <Navbar/>
            <div className='main'>
                <div className='about'>
                    <h1 className='about-title'>About Us</h1>
                    <div className='about-description'>
                        &emsp; YLX.com merupakan sebuah perusahaan yang berfokus dalam bidang penjualan barang bekas.
                        YLX.com pertamakali didirikan pada tahun 20XX dan membuka toko online pertamakalinya pada website ini.
                        Saat ini, YLX.com telah melayani sebanyak 1000+ pelanggan dan telah menjual lebih dari 1000+ barang bekas.
                        YLX.com berkomitmen untuk memberikan pelayanan terbaik kepada pelanggan dan menjual barang bekas berkualitas.
                        Sehingga pelanggan kami akan merasa puas dengan pelayanan kami dan akan terus membeli barang bekas dari YLX.com.
                        <br />
                        <br />
                        &emsp; Untuk sementara waktu, YLX.com sedang merencanakan untuk membangun sebuah toko offline  di kota Jakarta.
                        Nantinya, pelanggan dapat datang ke toko offline kami untuk membeli barang bekas secara langsung.
                        Serta, semua pihak dapat menjadi supplier kami untuk mengisi stok barang bekas tersebut secara langsung ke kami,
                        pihak yang mengisi stok tersebut akan mendapatkan imbalan yang sesuai dengan barang bekas yang diberikan.

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default About;