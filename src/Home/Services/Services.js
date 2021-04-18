import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';



const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://arcane-escarpment-26588.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="text-center my-5">
            <h3>Our Awesome Services</h3>
            <div className="row mt-5"> 
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;