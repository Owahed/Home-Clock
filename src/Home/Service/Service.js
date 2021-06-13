import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'

const Service = ({ service }) => {
    const id = service._id;

    const history = useHistory();
    const handelSubmit = (id) => {
        history.push(`/order/${id}`)
    }
    return (
        <section className='col-md-4 '>
            <div className="container">
                <div onClick={()=>handelSubmit(id)} class="card mt-3" >
                    <img style={{height:"200px"}} src={service.imageURL} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{service.serviceName}</h5>
                        <p class="card-text">{service.details}</p>
                        <h6>Cost: ${service.price}</h6>
                        <button type="button" class="btn btn-success">Go Order</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;