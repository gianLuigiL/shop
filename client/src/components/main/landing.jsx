//Dependencies
import React from 'react';
//Styles
import "./scss/landing.scss";
//Components
import MainCarousel from "../misc/main_carousel";
import MainGallery from '../misc/main_gallery';
import AppFooter from './app_footer';

//Images
import blue_glasses from "../../assets/images/landing/split_1.jpg";


export default function Landing(){
    return (
        <div className="landing">
            <MainCarousel />
            <div className="split d-flex flex-wrap justify-content-center align-items-center">
                <div className="text">
                    <div>
                        <h2>Carefully crafted from the lightest materials</h2>
                        <p>Our glasses are carefully crafted from rare metals like titanium and special alloys of steel to be light as a feather.</p>
                        <p>Try them in store, we'll make you a believer!</p>
                    </div>
                </div>
                <div className="frame">
                    <img src={blue_glasses} alt="Blue glasses"/>
                </div>
            </div>
            <MainGallery />
            <AppFooter />
        </div>
    )
}
