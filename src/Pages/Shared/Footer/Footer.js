import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer>

            {/* year set in dynamic */}
            <p className='text-center mt-5 '> ┬ęcopyright Rabiul Mannan Sajed {new Date().getFullYear()}</p>

        </footer>
    );
};

export default Footer;