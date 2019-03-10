//Dependencies
import React from 'react';
//Styles
import "./scss/main_carousel.scss";
//Images
import first from "../../assets/images/home_carousel/1.jpg";
import second from "../../assets/images/home_carousel/2.jpg";
import third from "../../assets/images/home_carousel/3.jpg";
import fourth from "../../assets/images/home_carousel/4.jpg";
import fifth from "../../assets/images/home_carousel/5.jpg";


export default function MainCarousel() {
    //Generate a div for every image in the carousel
    const images = [first, second, third, fourth, fifth].map(el => {
        const style_props = {
            backgroundImage: `url(${el})`
        };
        return <div className="image" style={style_props}></div>
    })

    return (
        <div className="main_carousel d-flex flex-row justify-content-center align-items-center">
            {images}
            <div className="cutout">
                <span>Make a statement.</span>
                <span>Make a statement.</span>
            </div>
        </div>
    )
}