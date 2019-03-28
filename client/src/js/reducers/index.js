import { ADD_ARTICLE, foreground_product_actions } from "../constants/action-types";

const initial_state = {
    foreground_product: {
        available: false,
        category: "",
        description: "",
        frame_material: [],
        gender: "",
        id: "",
        images: [],
        name: "",
        sku: ""
    }
}

export default function root_reducer(state = initial_state, action) {
    switch(action.type) {
        case ADD_ARTICLE: {
            return {...state, articles: [...state.articles, action.payload]}
        }
        case foreground_product_actions.FOREGROUD_PRODUCT_SET_AVAILABLE:{
            return {...state, foreground_product: {...state.foreground_product, available: action.payload}}
        }
        case foreground_product_actions.FOREGROUD_PRODUCT_SET_CATEGORY:{
            return {...state, foreground_product: {...state.foreground_product, category: action.payload}}
        }
        case foreground_product_actions.FOREGROUD_PRODUCT_SET_DESCRIPTION:{
            return {...state, foreground_product: {...state.foreground_product, description: action.payload}}
        }
        case foreground_product_actions.FOREGROUD_PRODUCT_SET_FRAME_MATERIAL:{
            return {...state, foreground_product: {...state.foreground_product, frame_material: action.payload}}
        }
        case foreground_product_actions.FOREGROUD_PRODUCT_SET_GENDER:{
            return {...state, foreground_product: {...state.foreground_product, gender: action.payload}}
        }
        case foreground_product_actions.FOREGROUD_PRODUCT_SET_IMAGES:{
            return {...state, foreground_product: {...state.foreground_product, images: action.payload}}
        }
        case foreground_product_actions.FOREGROUD_PRODUCT_SET_ID:{
            return {...state, foreground_product: {...state.foreground_product, id: action.payload}}
        }
        case foreground_product_actions.FOREGROUD_PRODUCT_SET_NAME:{
            return {...state, foreground_product: {...state.foreground_product, name: action.payload}}
        }
        case foreground_product_actions.FOREGROUD_PRODUCT_SET_SKU:{
            return {...state, foreground_product: {...state.foreground_product, sku: action.payload}}
        }
        default: {
            return state;
        }
    }
}