import React from 'react';
import './Notfound.css'
import notfound from '../../../image/404page.png'
const NotFound = () => {
    return (
        <div>
            <img className='notfound-img' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;