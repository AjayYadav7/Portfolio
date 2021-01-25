import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
const allReducers=combineReducers({
    detail:detailReducer
})
export default allReducers