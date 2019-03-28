import {
    ADD_ARTICLE
} from "../constants/action-types";

import { foreground_product_actions } from "../constants/action-types";

export function add_article(payload) {
    return {type: ADD_ARTICLE, payload};
}

export function foreground_product_set_available(availability) {
    return {type: foreground_product_actions.FOREGROUD_PRODUCT_SET_AVAILABLE, payload: availability}
}
export function foreground_product_set_category(category) {
    return {type: foreground_product_actions.FOREGROUD_PRODUCT_SET_CATEGORY, payload: category}
}
export function foreground_product_set_description(description) {
    return {type: foreground_product_actions.FOREGROUD_PRODUCT_SET_DESCRIPTION, payload: description}
}
export function foreground_product_set_frame_material(frame_material) {
    return {type: foreground_product_actions.FOREGROUD_PRODUCT_SET_FRAME_MATERIAL, payload: frame_material}
}
export function foreground_product_set_gender(gender) {
    return {type: foreground_product_actions.FOREGROUD_PRODUCT_SET_GENDER, payload: gender}
}
export function foreground_product_set_id(id) {
    return {type: foreground_product_actions.FOREGROUD_PRODUCT_SET_ID, payload: id}
}
export function foreground_product_set_images(images) {
    return {type: foreground_product_actions.FOREGROUD_PRODUCT_SET_IMAGES, payload: images}
}
export function foreground_product_set_name(name) {
    return {type: foreground_product_actions.FOREGROUD_PRODUCT_SET_NAME, payload: name}
}
export function foreground_product_set_sku(sku) {
    return {type: foreground_product_actions.FOREGROUD_PRODUCT_SET_SKU, payload: sku}
}

export const foreground_product_action_creator = {
    foreground_product_set_available,
    foreground_product_set_category,
    foreground_product_set_description,
    foreground_product_set_frame_material,
    foreground_product_set_gender,
    foreground_product_set_id,
    foreground_product_set_images,
    foreground_product_set_name,
    foreground_product_set_sku
}