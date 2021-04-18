import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpalCardFrom from './SimpalCardFrom';


const stripePromise = loadStripe('pk_test_51IeBxrH56zWVrwg4lI8SeuXTd2INS0LkCKhaRgb4rILZSqVNKH9Aan2PGN7QxO2mIwTcqDHBmqTbHKkGnCIYtqoN00NRef1I42');

const Payment = ({handelCheckOutOrder}) => {
    return (

        <Elements stripe={stripePromise}>
            <SimpalCardFrom handelCheckOutOrder={handelCheckOutOrder}></SimpalCardFrom>
        </Elements>

    );
};

export default Payment;