import React, { useEffect,useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';





const CustomerReviews = () => {

    const [customerReviews, setCustomerReviews] = useState([]);

    useEffect(() => {
        fetch('https://arcane-escarpment-26588.herokuapp.com/allReview')
            .then(res => res.json())
            .then(data => setCustomerReviews(data));
    }, []);
    return (
        <section className="my-5 py-5 ">
            <div className="text-center">
                <h2 style={{ fontSize: '2.0736rem', fontWeight: '500', lineHeight: ' 1.2', color: ' rgb(11, 19, 42)' }}>Trusted by Thousands of <br /> Happy Customer</h2>
                <p>These are the stories of our customers who have joined us <br /> with great pleasure when using this crazy feature.</p>
            </div>
            <div className="row my-5">
                {
                    customerReviews.map(customerReview => <CustomerReview customerReview={customerReview}></CustomerReview>)
                }
            </div>
        </section>
    );
};

export default CustomerReviews;