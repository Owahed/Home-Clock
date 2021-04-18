import React from 'react';
import facebook from '../../Image/Vector.png'
import linkDin from '../../Image/Vector-2.png'
import insta from '../../Image/Vector-1.png'
import youTube from '../../Image/Vector-3.png'


const Footer = () => {
    return (
        <footer className="py-5" style={{backgroundColor:"#282c34"}}>
            <div className="container">
            <div  className="row ">
                <div className="col-md-3">
                   <div className="mt-5">
                   <h5 style={{color:"#fff"}}>Home Clock</h5>
                    <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
                   </div>
                   <div className="d-flex">
                        <a href="#"><img style={{width:"30px",marginRight:"8px"}}  src={facebook} alt=""/></a>
                        <a href="#"><img style={{width:"30px",marginRight:"8px"}}  src={insta} alt=""/></a>
                        <a href="#"><img style={{width:"30px",marginRight:"8px"}}  src={linkDin} alt=""/></a>
                        <a href="#"><img style={{width:"40px",marginRight:"8px"}}  src={youTube} alt=""/></a>
                   </div>
                   <p className="mt-4">© 2020 Your Company</p>
                    
                </div>
                <div className="col-md-3 mt-5 text-white">
                    <h5>Product</h5>
                    <a style={{textDecoration:"none",lineHeight:' 2' }} href="#">Pricing</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Locations</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Server</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Countries</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Blog</a>
                    
                </div>
                <div className="col-md-3 mt-5 text-white">
                    <h5>New Products</h5>
                    <a style={{textDecoration:"none",lineHeight:' 2' }} href="#">Pricing</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Locations</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Server</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Countries</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Blog</a>
                    
                </div>
                <div className="col-md-3 mt-5 text-white">
                    <h5>Support</h5>
                    <a style={{textDecoration:"none",lineHeight:' 2' }} href="#">Pricing</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Locations</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Server</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Countries</a>
                    <br/>
                    <a style={{textDecoration:"none",lineHeight:' 2'}} href="#">Blog</a>
                    
                </div>
                
            </div>
            </div>
        </footer>
    );
};

export default Footer;