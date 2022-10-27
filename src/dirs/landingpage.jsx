import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import css
import '../styles/landingpage.css';

function Landingpage() {
    return (
        <div>
            <div className="header">
                <div className="header-title">YLX pusatnya nge-deal!</div>
                
                <div className="search-input-wrapper">
                    <div className="search-input">
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                        <input type="text" className="search-input-field" placeholder="Cari barang yang kamu mau"/>
                    </div>
                </div>
            </div>

            <div className="categories">
                <div className="categories-header">
                    Our Categories
                </div>
                <div className="categories-list">

                </div>
                <div className="categories-footer">
                    <div className="categories-footer-text">dan lebih banyak lagi...</div>
                    <div className="categories-footer-button">
                        <button type="button" className="categories-footer-button-text">Lihat Semua</button>
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