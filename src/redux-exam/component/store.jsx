import { createStore } from "redux";
import reducer from "./counterReducer";
const store = createStore(reducer);
export default store;
