//Function used to create the store that accepts combined reducers as param
import { createStore } from "redux";
//Combined reducer with initial state
import root_reducer from "../reducers/index";

const store = createStore(root_reducer);

export default store;