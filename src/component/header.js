import React from "react";
import "./header.css";
import logo from "../img/logo.svg";



function Header() {
    const navigation = ["HOME", "PORTFOLIO", "ABOUT", "CONTACT"];
    return (
        <div className="header-container">
            <div className="header-container__nav">
                <div className="header-container__logo">
                    <div>
                        <img src={logo} alt="logo" title="logo" />
                    </div>
                    <div className="header-container-nav-logo-text">
                        <h1 className="header-container-nav-logo-text-h1">BLA BLA</h1>
                        <p className="header-container-nav-logo-text-p">One Page Flat Template</p>
                    </div>
                </div>
                <div className="header-container-nav-navBar">
                    <ul className="navBar-list">
                        {navigation.map((list,id) =>
                                <li key={id} className="navBar-list-item">{list}</li>
                           )}
                    </ul>
                </div>
            </div>
            <div className="Jumbotron-conteiner">
                <div className="Jumbotron-conteiner-content">
                    <h1 className="Jumbotron-conteiner-content-h1">We Build <span>Brand</span></h1>
                    <p className="Jumbotron-conteiner-content-p">Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                    <button className="Jumbotron-conteiner-content-btn">LEARN MORE</button>
                    <button className="Jumbotron-conteiner-content-btnarrow">
                        <i className="fa fa-chevron-down fa-2x" aria-hidden="true"></i>
                    </button>

                </div>
            </div>



        </div>
    );
}

export default Header;