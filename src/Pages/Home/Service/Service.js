import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ drService }) => {
    const { treatmentname, description, img, price } = drService;
    const navigate = useNavigate();

    const navigateToSerivceDetails = () => {
        navigate('/checkout');
    }
    return (
        <div className='g-4  col-sm-12 col-lg-4'>
            <div className="card " >
                <img src={img} className="card-img-top service-img" alt="..." />
                <div className="card-body service-body">
                    <h5 className="card-title text-center service-title">{treatmentname}</h5>
                    <p className="card-text service-text">{description}</p>
                    <p className='service-fee'>Treatment Fee: {price}</p>
                    <button onClick={() => navigateToSerivceDetails()} className='service-btn'>Book: {treatmentname}</button>

                </div>
            </div>
        </div>


    );
};

export default Service;