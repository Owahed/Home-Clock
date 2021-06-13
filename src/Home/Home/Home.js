import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import Contact from '../Contact/Contact';
import CustomerReviews from '../CustomerReviews/CustomerReviews';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            {/* <NavBar></NavBar> */}
            <Header></Header>
            <BusinessInfo></BusinessInfo>
            <Services></Services>
            <Contact></Contact>
            <CustomerReviews></CustomerReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;