import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer>

            {/* year set in dynamic */}
            <p className='text-center mt-5 '> ©copyright Rabiul Mannan Sajed {new Date().getFullYear()}</p>

        </footer>
    );
};

export default Footer;