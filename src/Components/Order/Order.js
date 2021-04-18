import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Payment from '../Payment/Payment';

const Order = () => {
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    

    const [products, setProducts] = useState();
    const productData = products?.find((data) => data._id == id);


    useEffect(() => {
        fetch('https://arcane-escarpment-26588.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    const handelCheckOut = (paymentId) => {
        const order = { ...productData, ...loggedInUser,paymentId };
        fetch('https://arcane-escarpment-26588.herokuapp.com/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('Your order placed successfully')
            })
    }
    return (
        <div className="row">
            <div className="container d-flex mt-5 p-5">
           
                <div className="col-md-5">
                <h2 className="mb-4">Welcome: {loggedInUser.name}</h2>
                    <h3>Service Name: {productData?.serviceName}</h3>
                    <p className="my-3">{productData?.details}</p>
                    <h4 style={{color:"green"}}>Cost: ${productData?.price}</h4>
                    
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-5">
                    <h3 className="mb-4">Payment:</h3>
                    <Payment handelCheckOutOrder={handelCheckOut}></Payment>
                </div>
            </div>
        </div>
    );
};

export default Order;