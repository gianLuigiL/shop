//Dependencies
import React from 'react';
//Styles
import "./scss/main_gallery.scss";
//Images
import _1 from "../../assets/images/home_gallery/1.jpg"
import _2 from "../../assets/images/home_gallery/2.jpg"
import _3 from "../../assets/images/home_gallery/3.jpg"
import _4 from "../../assets/images/home_gallery/4.jpg"
import _5 from "../../assets/images/home_gallery/5.jpg"
import _6 from "../../assets/images/home_gallery/6.jpg"
import _7 from "../../assets/images/home_gallery/7.jpg"
import _8 from "../../assets/images/home_gallery/8.jpg"
import _9 from "../../assets/images/home_gallery/9.jpg"
import _10 from "../../assets/images/home_gallery/10.jpg"
import _11 from "../../assets/images/home_gallery/11.jpg"
import _12 from "../../assets/images/home_gallery/12.jpg"
import _13 from "../../assets/images/home_gallery/13.jpg"
import _14 from "../../assets/images/home_gallery/14.jpg"
import _15 from "../../assets/images/home_gallery/15.jpg"
import _16 from "../../assets/images/home_gallery/16.jpg"
import _17 from "../../assets/images/home_gallery/17.jpg"
import _18 from "../../assets/images/home_gallery/18.jpg"
import _19 from "../../assets/images/home_gallery/19.jpg"
import _20 from "../../assets/images/home_gallery/20.jpg"
import _21 from "../../assets/images/home_gallery/21.jpg"
import _22 from "../../assets/images/home_gallery/22.jpg"
import _23 from "../../assets/images/home_gallery/23.jpg"

export default function MainGallery(){
    const images = [_1,_2,_3,_4,_5,_6,_7,_8,_9,_10,
    _11,_12,_13,_14,_15,_16,_17,_18,_19,_20,
    _21,_22,_23].map(el => <div className="gallery_item d-flex align-items-center justify-content-center"><img src={el} alt="A person with glasses"/></div>);

    return(
        <div className="main_gallery">
            {images}
            <div className="gallery_banner">
                <h2>Discover hundreds of styles</h2>
                <p>We got you covered, wherever you're going.</p>
                <button className="custom_btn ml-auto mr-auto">Discover</button>
            </div>
        </div>
    )
}