import React from 'react';
import './CustomerReview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar ,faStarHalfAlt} from '@fortawesome/free-solid-svg-icons'

const CustomerReview = ({customerReview}) => {
    return (
        <div className="col-md-4  ">
            <div className="container ">
            <div className=" review testimonial mt-3">
                <div className="d-flex mt-2">
                    <div className="p-3">
                    <h6>{customerReview.userName}</h6>
                    <small> {customerReview.address}</small>
                    </div>
                    <div className="p-3">
                    <FontAwesomeIcon style={{color:"gold"}}  icon={faStar} />
                    <FontAwesomeIcon style={{color:"gold"}}  icon={faStar} />
                    <FontAwesomeIcon style={{color:"gold"}}  icon={faStar} />
                    <FontAwesomeIcon style={{color:"gold"}}  icon={faStar} />
                    <FontAwesomeIcon style={{color:"gold"}}  icon={faStarHalfAlt} />
                    </div>
                </div>
                <div className='mt-4'>
                    <p>{customerReview.description}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default CustomerReview;