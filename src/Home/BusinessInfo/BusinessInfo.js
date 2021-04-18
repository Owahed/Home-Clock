import React from 'react';
import service from '../../Image/2650452.jpg'
import './BusinessInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {
    return (
       <section className="container">
            <div className="row my-5 py-5">
            <div className="col-md-6 col-sm-12">
                <img  src={service} alt="" />
            </div>
            <div className="col-md-6 col-sm-12 pt-5 p-5">
               <div>
               <h2 className="businessInfo-h2">We Provide Many <br/> <span style={{color:"#EF929C"}}>Features</span> You Can Use</h2>
                <p className="businessInfo-p">You can explore the features that we provide with fun and have their own functions each feature.</p>
               </div>
               <div className="d-flex">
               <FontAwesomeIcon style={{color:'green',marginRight:"8px",marginTop:"5px"}} icon={faCheckCircle} />
                   <p>Powerfull online protection.</p>
               </div>
               <div className="d-flex">
               <FontAwesomeIcon style={{color:'green',marginRight:"8px",marginTop:"5px"}} icon={faCheckCircle} />
                   <p>Internet without borders.</p>
               </div>
               <div className="d-flex">
               <FontAwesomeIcon style={{color:'green',marginRight:"8px",marginTop:"5px"}} icon={faCheckCircle} />
                   <p>Enim ad minim veniam</p>
               </div>
               <div className="d-flex">
               <FontAwesomeIcon style={{color:'green',marginRight:"8px",marginTop:"5px"}} icon={faCheckCircle} />
                   <p>Thermo Ball Etip Gloves.</p>
               </div>
            </div>
        </div>
       </section>
    );
};

export default BusinessInfo;