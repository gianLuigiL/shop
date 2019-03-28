//Dependencies
import React from 'react';
//Styles
import "./scss/product_display.scss";

export default function ProductDisplay(props) {
    let images;
    if(props.images.length) {
        images = props.images.map(el => <img src={el} alt="..."/>)
    } else {
        images = <img class="placeholder_image" src={require("../../assets/images/image-placeholder.png")} alt="placeholder"/>
    }

    return (
        <div className="product_display_outer_container">
            <h2>{props.name || "Insert a product name"}</h2>
            <div className="product_display_inner_container">
                <div className="photos">
                    {images}
                </div>
                <div className="text">
                    <div className="description">{props.description || "Insert a product description"}</div>
                    <div className="frame_material">{props.frame_material || "Insert a frame material"}</div>
                    <div className="gender">{props.gender || "Insert a gender"}</div>
                </div>
            </div>

            {JSON.stringify(props)}
        </div>
    )
}