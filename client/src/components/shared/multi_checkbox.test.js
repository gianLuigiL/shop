import React from 'react'
import { shallow, mount } from "enzyme";
import MultiCheckbox from "./multi_checkbox";
import { choices } from '../../js/utils/choices';


describe("MultiCheckbox", () => {
    it("Should render correctly without props", () => {
        const component = shallow(<MultiCheckbox/>);
        expect(component).toMatchSnapshot();
    });

    it("Should render correctly with props", () => {
        const component = shallow(<MultiCheckbox choices={choices}/>);
        expect(component).toMatchSnapshot();
    });

    it("Should render an input for every choice", () => {
        const component = mount(<MultiCheckbox choices={choices}/>);
        expect(component.find("input").length).toBe(choices.length);
        component.unmount();
    });
    it("Should call the handler", () => {
        const change_handler = jest.fn();
        const component = mount(<MultiCheckbox choices={choices} change_handler={change_handler}/>);
        component.find(`input#${choices[0].value}`).simulate("change");
        expect(change_handler).toHaveBeenCalled();
        component.unmount();
    });
})