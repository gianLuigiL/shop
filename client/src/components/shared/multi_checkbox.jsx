//Dependencies
import React from 'react';
//Styles
import "./scss/multi_checkbox.scss";

//Test default choices
import { choices } from '../../js/utils/choices';

export default function MultiCheckBox(props){
    //Only elements whose checkbox are selected are placed here
    let active_choices = [];
    //Default direction
    const direction = "horizontal";

    //This event handler filters the choices to only the selected ones
    const change = (choice_object, event) => {
        if(event.target.checked) {
            //Add
            active_choices = [...active_choices, choice_object];
        } else {
            //Remove
            active_choices = active_choices.filter(el => el.value !== choice_object.value);
        }
        //Calls the ancestor event handler that will accept the array of selected choices
        if(props.change_handler) {
            props.change_handler(active_choices);
        }
    }
    //Use either the passed or the test choices
    const checkboxes = (props.choices || choices).map(el => (
        <span className="multi_checkbox" key={el.value}>
            <label htmlFor={el.value} className="d-flex flex-wrap align-items-center justify-content-start" >
                <input type="checkbox"  name={el.value} id={el.value} value={el.value} defaultChecked={el.checked ? "checked" : ""} onChange={change.bind(null, el)} tabIndex="0"/>
                <span className="custom_checkbox"></span>
                <span className="text">{el.display_value || el.value}</span>
            </label>
        </span>
    ))

    return (
        <span className={`multi_checkbox_container ${props.direction || direction}`}>
            {checkboxes}
        </span>
    )
}