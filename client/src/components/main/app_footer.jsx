//Dependencies
import React from 'react';
//Styles
import "./scss/app_footer.scss";
//Images
import logo from "../../assets/images/logo.svg";


export default function AppFooter(){
    return(
        <footer className="app_footer d-flex flex-row flex-wrap justify-content-center">
            <div className="footer_branding d-flex flex-column align-items-center">
                <a href="/"><img src={logo} alt="Logo of the company."/></a>
                <a href="/">EyewearTime</a>
            </div>
            <ul>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Support</a></li>
                <li><a href="/">Data Protection</a></li>
            </ul>
            <ul>
                <li><a href="/">Find a store</a></li>
                <li><a href="/">Careers</a></li>
            </ul>
        </footer>
    )
}