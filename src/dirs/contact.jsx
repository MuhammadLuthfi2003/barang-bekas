import React from 'react';

import '../styles/contact.css';

function Contact() {
    return (
        <div className='main'>
            <div className='contact'>
                <h1 className='contact-title'>Kontak Kami</h1>
                <div className='contact-content'>
                    <ul className='contact-content-list'>
                        <li className='contact-content-item'>
                            <h2>Alamat</h2>
                            <div>Jl. Lorem Ipsum</div>
                        </li>
                        <li className='contact-content-item'>
                            <h2>Telepon</h2>
                            <div>081234567890</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact;