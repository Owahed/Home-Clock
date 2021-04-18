import React from 'react';
import baner from '../../Image/10894.jpg'

const Header = () => {
    return (
        <main className="container ">
            <div className="container mt-4 row ">
            <div className="col-md-6 d-flex align-items-center">
               <div>
               <h1 className="my-5 text-uppercase">Select  <span style={{color:"#5071BE"}}>Your New</span><br/>Perfect Style</h1>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id minima tempore nostrum odit nulla culpa.</h6>
                <button className="btn btn-lg  mt-3 hover-top btn-glow text-end">View Details</button>
               </div>
            </div>
            
            <div  className="col-md-6">
                <img  style={{height:"400px"}} src={baner} alt=""/>
            </div>
            </div>
        </main>
    );
};

export default Header;