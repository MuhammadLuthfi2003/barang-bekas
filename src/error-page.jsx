import { useRouteError } from "react-router-dom";
import React from 'react';

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import './error-page.css';
import './styles/index.css';

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className='main'>
            <Navbar />
            <div className="error-page">
                <div className="error-page-title">Maaf, Halaman yang Anda cari tidak ditemukan!</div>
                <div className="error-page-subtitle">Mohon untuk memeriksa URL kembali dan coba lagi</div>
                <div className="error"><i>{error.statusText || error.message}</i></div>
                <button type="button" className='btn-return' onClick={() => {location.href = '/'}}>Kembali ke halaman awal</button>
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage;



