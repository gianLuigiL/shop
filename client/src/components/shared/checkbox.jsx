import React from 'react';
import "./scss/checkbox.scss";

export default function CheckBox(props) {
    const change = (target, event) => {
        if(props.change_handler){
            props.change_handler({...target, ...{checked: event.target.checked}}, event)
        } else {
            console.log(target)
            alert("No change handler is set for the checkbox")
        }
    }

    return (
        <fieldset className="mono_checkbox">
            <legend>{props.target.display_value || props.target.value}</legend>
            <label htmlFor={props.target.value} className=" d-flex flex-wrap align-items-center justify-content-start" >
                <input type="checkbox"  name={props.target.value} id={props.target.value} value={props.target.value} defaultChecked={props.target.checked ? "checked" : ""} onChange={change.bind(null, props.target)} tabIndex="0"/>
                <span className="custom_checkbox"></span>
                <span className="text">{props.target.display_value || props.target.value}</span>
            </label>
        </fieldset>
    )
}