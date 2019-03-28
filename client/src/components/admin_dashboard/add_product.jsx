//Dependencies
import React from 'react';
//Styles
import "./scss/add_product.scss";
//Components
import Checkbox from "../shared/checkbox";
import ProductDisplay from '../shared/product_display';
import { connect } from 'react-redux';
import { foreground_product_action_creator } from '../../js/actions';
const nanoid = require("nanoid");

const availability = {value:"available", display_value:"Available", checked: false};

const mapStateToProps = state => {
    return { product: state.foreground_product }
}

const mapDispatchToPros = (dispatch) => {
   return {
      set_available:  availability  => dispatch( foreground_product_action_creator.foreground_product_set_available(availability) ), 
      set_category:  category  => dispatch( foreground_product_action_creator.foreground_product_set_category(category) ), 
      set_description:  description  => dispatch( foreground_product_action_creator.foreground_product_set_description(description) ), 
      set_frame_material:  frame_material  => dispatch( foreground_product_action_creator.foreground_product_set_frame_material(frame_material) ), 
      set_gender:  gender  => dispatch( foreground_product_action_creator.foreground_product_set_gender(gender) ), 
      set_images:  images  => dispatch( foreground_product_action_creator.foreground_product_set_images(images) ), 
      set_id:  id  => dispatch( foreground_product_action_creator.foreground_product_set_id(id) ), 
      set_name:  name  => dispatch( foreground_product_action_creator.foreground_product_set_name(name) ), 
      set_sku:  sku  => dispatch( foreground_product_action_creator.foreground_product_set_sku(sku) ) 
   } 
}

class AddProduct extends React.Component {

    constructor(props){
        super(props);
        this.response_text = '';

        this.set_available = this.set_available.bind(this);
        this.set_category = this.set_category.bind(this);
        this.set_description = this.set_description.bind(this);
        this.set_frame_material = this.set_frame_material.bind(this);
        this.set_gender = this.set_gender.bind(this);
        this.set_images = this.set_images.bind(this);
        this.set_id = this.set_id.bind(this);
        this.set_name = this.set_name.bind(this);
        this.set_sku = this.set_sku.bind(this);
        this.submit_image = this.submit_image.bind(this);
        this.submit_product = this.submit_product.bind(this);
    }

    set_available(element, event){
        this.props.set_available(event.target.checked);
    }
    set_category(event){
        this.props.set_category(event.target.value);
    }
    set_description(event){
        this.props.set_description(event.target.value);
    }
    set_frame_material(event){
        this.props.set_frame_material(event.target.value);
    }
    set_gender(event){
        this.props.set_gender(event.target.value);
    }
    set_images(event){
        this.props.set_images(event.target.value);
    }
    set_id(id){
        this.props.set_id(id);
    }
    set_name(event){
        this.props.set_name(event.target.value);
    }
    set_sku(event){
        this.props.set_sku(event.target.value);
    }

    submit_image(event){
        event.preventDefault();
        let form_data = new FormData();
        const input = event.target.getElementsByTagName("input")[0];
        const textarea = event.target.getElementsByTagName("textarea")[0];
        form_data.append("id", this.props.product.id);
        [...input.files].forEach( el =>{
            form_data.append(input.name, el)
        } )
        form_data.append("alt", textarea.value);
        const url = "/image";
        const options = {
            method: "POST",
            body: form_data
        };

        fetch(url, options)
        .then(res => res.text())
        .then(res => {
            this.response_text = res;
            input.files = null;
            input.value = "";
            textarea.value = "";
        });
    }

    submit_product(event) {
        event.preventDefault();
        //Normalizes and sort all inputs
        const inputs = [...event.target.getElementsByTagName("input"),
        ...event.target.getElementsByTagName("textarea"),
        ...event.target.getElementsByTagName("select")]
        .sort( (a, b) => a.name.charCodeAt(0) - b.name.charCodeAt(0));
        const form_data = new FormData();
        form_data.append("id", this.props.product.id);
        //Iterate over inputs instead of creating form data from <form> to submit unchecked checkboxes
        inputs.forEach(el => {
            if (el.type === "checkbox") {
                form_data.append(el.name, el.checked);
                return;
            }
            form_data.append(el.name, el.value);
        })

        const url = "/add_product";
        const options = {
            method: "POST",
            body: form_data
        }
        fetch(url, options)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    componentDidMount(){
        this.set_id("P"+nanoid())
    }

    render() {
        return (
            <>
                <h2>Add product</h2>
                <div className="add_product_container ">
                    <div className="preview ">
                        <ProductDisplay {...this.props.product}/>
                    </div>
                    <div>
                        <form action="/" className="Add images" onSubmit={this.submit_image}>
                            <fieldset>
                                <legend>Product Images</legend>
                                <div className="images d-flex flex-row flex-align-center">
                                    <label htmlFor="images" id="label_for_images">Image
                                        <span>
                                            <input type="file" name="images" id="images" multiple className="form-control-file"  required/>
                                            <span class="d-flex align-items-center justify-content-center">+</span>
                                        </span>
                                    </label>
                                    <label htmlFor="img_alt_text" id="label_for_img_alt_text" class="flex-auto">Alternative text:
                                        <textarea name="img_alt_text" id="img_alt_text" class="form-control" aria-labelledby="label_for_img_alt_text" placeholder="Add a description for the visually impaired." required></textarea>
                                        <p className="text-muted">It's best to upload an image at a time with a specific description, but you can also write a single description for all selected images.</p>
                                    </label>
                                </div>
                                <button type="submit" className="custom_btn mr-auto ml-auto d-flex">
                                    Add Image
                                </button>
                            </fieldset>
                        </form>
                    <form action="/" className="add_product" encType="multipart/form-data" onSubmit={this.submit_product}>
                            <fieldset>
                                <legend>
                                    Product details
                                </legend>
                                <label htmlFor="name">Name
                                    <input type="text" name="name" id="name" onInput={this.set_name}/>
                                </label>
                                <label htmlFor="category">Category
                                    <select name="category" id="category" className="form-control" onChange={this.set_category}>
                                        <option value="clear_glasses">Clear</option>
                                        <option value="sunglasses">Sunglasses</option>
                                    </select>
                                </label>
                                <label htmlFor="gender">Gender
                                    <select name="gender" id="gender" className="form-control" onChange={this.set_gender}>
                                        <option value="man">Man</option>
                                        <option value="woman">Woman</option>
                                        <option value="unisex">Unisex</option>
                                    </select>
                                </label>
                                <label htmlFor="frame_material">Frame Material
                                    <input type="text" name="frame_material" id="frame_material" className="form-control" onInput={this.set_frame_material}/>
                                </label>
                                <label htmlFor="sku">SKU
                                    <input type="text" name="sku" id="sku" className="form-control" onInput={this.set_sku}/>
                                </label>
                                <Checkbox target={availability} change_handler={this.set_available}/>
                                <label htmlFor="description">Description
                                    <textarea name="description" id="description" className="form-control" onInput={this.set_description}></textarea>
                                </label>
                            </fieldset>
                            <button type="submit" className="custom_btn mr-auto ml-auto d-flex">
                                Add product
                            </button>
                        </form>
                    </div>
                </div>
            </>
        )
    }

    componentWillUnmount(){
        this.props.set_available(true);
        this.props.set_category("");
        this.props.set_description("");
        this.props.set_frame_material([]);
        this.props.set_gender("");
        this.props.set_id("");
        this.props.set_images([]);
        this.props.set_name("");
        this.props.set_sku("");
    }
}

const connectedAddProduct = connect(mapStateToProps, mapDispatchToPros)(AddProduct);
export default connectedAddProduct;