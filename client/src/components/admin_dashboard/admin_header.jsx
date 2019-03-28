//Dependencies
import React from 'react'
//Styles
import "./scss/admin_header.scss";
//Images
import LogoBlack from "../../assets/images/logo_black.svg"

export default function AdminHeader(props){
    return (
        <header className="dashboard_header container_fluid">
            <div className="row navbar navbar-expand">
                <a href="/" className="branding col-sx-auto navbar-brand navbar-nav">
                    <img src={LogoBlack} alt="Logo of a stylized pair of glasses"/>
                    <span className="app_name nav-item">EyewearShop Administration</span>
                </a>
                <div className="spacer col"></div>
                <nav className="links col-sx-auto navbar-nav">
                    <div className="col navbar-text"><a href="/">Metrics</a></div>
                    <div className="col navbar-text">Products
                    <div className="dropdown">
                        <ul className="dropdown flex-row flex-wrap">
                            <li><a href="/">Add Product</a></li>
                            <li><a href="/">List</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col navbar-text">Users
                    <div className="dropdown">
                        <ul className="dropdown flex-row flex-wrap">
                            <li><a href="/">Add User</a></li>
                            <li><a href="/">List</a></li>
                        </ul>
                    </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}