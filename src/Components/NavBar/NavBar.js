import React from 'react';

const NavBar = () => {
    return (
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <div class="container-fluid">
                    <a style={{ color: "#2b468b", fontWeight: "700", marginLeft: "10%" }} class="navbar-brand" href="/">Home Clock</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul style={{ marginLeft: "65%" }} class="navbar-nav ">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/admin">Admin</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="/contact">Connect Us</a>
                            </li>

                            
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;