import React from "react";
import Switch from "./Switch";
// import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        // Temporary markup ...
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Switch></Switch>
                {/* <Link className="navbar-brand" to="/">[*] Visa</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/">Pricing</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    );
};

export default Nav;