import { combineReducers } from "redux"
import reducer from "./reducer"

const reducers = combineReducers({
    store: reducer,
})

export default reducers;