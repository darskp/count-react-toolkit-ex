import { createStore } from "redux";
import reduce from "../reducers/reducer";
let store=createStore(reduce);
export default store;


