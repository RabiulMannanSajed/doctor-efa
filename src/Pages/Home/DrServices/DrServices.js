import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './DrServices.css'

import './DrServices.css'
const DrServices = () => {
    const [drServices, setDrServices] = useState([]);

    useEffect(() => {
        fetch('drtreatment.json')
            .then(res => res.json())
            .then(data => setDrServices(data))
    }, [])
    return (
        <div id='services' className='container'>
            <h2 className='drServices-text text-center m-4'>Treatments </h2>
            <div className='row '>
                {
                    drServices.map(drService => <Service
                        key={drService.id}
                        drService={drService}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default DrServices;