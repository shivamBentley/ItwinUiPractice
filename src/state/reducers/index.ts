import { combineReducers } from "redux"
import reducer from "./reducer"

const reducers = combineReducers({
    ItemList: reducer,
})

export default reducers;