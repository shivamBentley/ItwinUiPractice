import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

// const initialState = {
//     invoice: [],
//     count: 0
// }

export const store = createStore(
    reducers, {}, applyMiddleware(thunk)
)

export default store;