import React from 'react';
import logo from '../../images/logo.png';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand logo" href="#"><img src={logo} alt=""/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="./">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./explore">Explore</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./login">Log in</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link button btn-success rounded-pill" href="./join">Join for Free</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;