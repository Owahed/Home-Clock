import React from 'react';
import AllServices from '../UserServicesList/UserServicesList';
import SideBar from '../SideBar/SideBar';

const Admin = () => {
    return (
        <div >
            <div className="row">
            <div className="col-md-4 ">
                <SideBar></SideBar>
                
            </div>
            <div className="col-md-8">
                <h4 className="text-center mt-5 pt-5">Welcome to Admin Panel</h4>
            </div>
        </div>
        </div>
    );
};

export default Admin;