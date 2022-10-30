import React from 'react';

import '../styles/error.css';

function ErrorPage() {


    return (
        <div className='main'>
            <div className="error-page">
                <div className="error-page-title">Maaf, Halaman yang Anda cari tidak ditemukan!</div>
                <div className="error-page-subtitle">Mohon untuk memeriksa URL kembali dan coba lagi</div>
                <button type="button" className='btn-return' onClick={() => {location.href = '/'}}>Kembali ke halaman awal</button>
            </div>
        </div>
    )
}

export default ErrorPage;