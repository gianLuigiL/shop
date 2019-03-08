import {
    ADD_ARTICLE
} from "../constants/action-types";

export function add_article(payload) {
    return {type: ADD_ARTICLE, payload};
}