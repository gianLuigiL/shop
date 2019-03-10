//Dependencies
import React from 'react'
//Styles
import "./scss/app_header.scss";

export default function app_header(props) {
    return (
        <header className="app_header container-fluid">
            <div className="row navbar navbar-expand">
                <a href="/" className="branding col-sx-auto navbar-brand navbar-nav">
                    <img src="./assets/images/logo.svg" alt="Logo of a stylized pair of glasses"/>
                    <span className="app_name nav-item">EyewearShop</span>
                </a>
                <div className="spacer col"></div>
                <nav className="links col-sx-auto navbar-nav">
                    <span className="col navbar-text">Products</span>
                    <span className="col navbar-text">Find us</span>
                    <span className="col navbar-text">Contact</span>
                </nav>
            </div>
        </header>
    )
}