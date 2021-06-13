import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faColumns, faPlus, faTrash, faUserPlus, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';



const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const adminEmail = isAdmin[0]?.email;


    useEffect(() => {
        fetch('https://arcane-escarpment-26588.herokuapp.com/isAdmin?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    return (
        <div style={{ backgroundColor: "#f3f4ed", color: "#e84545" }} >
            <div style={{ height: "600px" }} className="p-5 ">

                <div>

                    {adminEmail ?

                            <div>
                                <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faColumns} />
                                <Link style={{ textDecoration: "none", color: "#2b2e4a", fontWeight: "500" }} to="/allServicesList">All Order List</Link>
                                <br />

                                <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faPlus} />
                                <Link style={{ textDecoration: "none", color: "#2b2e4a", fontWeight: "500" }} to="/addServices">Add Services</Link>
                                <br />

                                <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faTrash} />
                                <Link style={{ textDecoration: "none", color: "#2b2e4a", fontWeight: "500" }} to="/manageServices">Manage Services</Link>
                                <br />

                                <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faUserPlus} />
                                <Link style={{ textDecoration: "none", color: "#2b2e4a", fontWeight: "500" }} to="/makeAdmin">Make Admin</Link>
                                <br />
                            </div>

                        :



                        <div>
                            <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faColumns} />
                            <Link style={{ textDecoration: "none", color: "#2b2e4a", fontWeight: "500" }} to="/userServicesList">Order List</Link>
                            <br />

                            <FontAwesomeIcon style={{ marginRight: "8px" }} icon={faCommentDots} />
                            <Link style={{ textDecoration: "none", color: "#2b2e4a", fontWeight: "500" }} to="/review">Review</Link>
                            <br />
                        </div>

                    }


                </div>


            </div>
        </div>
    );
};

export default SideBar;