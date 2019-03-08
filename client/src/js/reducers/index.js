import { ADD_ARTICLE } from "../constants/action-types";

const initial_state = {
    articles: []
}

export default function root_reducer(state = initial_state, action) {
    switch(action.type) {
        case ADD_ARTICLE: {
            return {...state, articles: [...state.articles, action.payload]}
        }
        default: {
            return state;
        }
    }
}